// ✅ Updated import section
import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// ✅ Use the stealth plugin
puppeteer.use(StealthPlugin());


export const applyToJobs = async (req, res) => {
    const { role, location, resume, mobileNo } = req.body;
    const appliedJobs = [];

    try {
        let browser = await puppeteer.launch({ headless: false });
        let page = await browser.newPage();
        await page.setViewport({ width: 1566, height: 768 });

        await page.goto("https://www.linkedin.com/login", { waitUntil: "networkidle2" });
        console.log("👤 Please log in to LinkedIn manually...");

        await page.waitForSelector(".scaffold-finite-scroll__content", { timeout: 0 });
        console.log("✅ Logged in! Saving cookies...");

        const cookies = await page.cookies();
        await browser.close();

        browser = await puppeteer.launch({ headless: true });
        page = await browser.newPage();
        await page.setViewport({ width: 1366, height: 768 });
        await page.setCookie(...cookies);

        const searchUrl = `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(role)}&location=${encodeURIComponent(location)}&f_AL=true`;
        await page.goto(searchUrl);
        console.log(`🔍 Searching for '${role}' in '${location}'...`);

        await page.waitForSelector(".job-card-container--clickable", { timeout: 15000 });
        const jobCards = await page.$$(".job-card-container--clickable");
        console.log("📌 Total jobs found:", jobCards.length);

        for (let i = 0; i < jobCards.length; i++) {
            try {
                await jobCards[i].click();
                await randomWait();

                const applyButton = await page.$('button.jobs-apply-button');
                if (!applyButton) {
                    console.log(`❌ No Easy Apply button for job ${i + 1}`);
                    continue;
                }

                await applyButton.click();
                await randomWait();

                const phoneInputSelector = 'input[aria-label="Phone number"], input[aria-label="Phone*"], input[aria-label="Phone"]';
                const phoneInput = await page.$(phoneInputSelector);
                if (phoneInput && mobileNo) {
                    const isVisible = await page.evaluate(el => {
                        const style = window.getComputedStyle(el);
                        return style.display !== 'none' && style.visibility !== 'hidden' && !el.disabled;
                    }, phoneInput);

                    if (isVisible) {
                        const currentValue = await page.evaluate(input => input.value, phoneInput);
                        const isValidNumber = /^\d{10}$/.test(mobileNo);

                        if (!isValidNumber) {
                            console.log("❌ Invalid phone number:", mobileNo);
                        } else if (!currentValue || currentValue.trim() === "") {
                            await phoneInput.click({ clickCount: 3 });
                            await phoneInput.press("Backspace");
                            await phoneInput.type(mobileNo, { delay: 100 });
                            console.log("📞 Filled phone number");
                            await randomWait();
                        } else {
                            console.log("📞 Phone number already filled");
                        }
                    }
                }

                const locationInput = await page.$('input[aria-label="City"]');
                if (locationInput && location) {
                    const isVisible = await page.evaluate(el => {
                        const style = window.getComputedStyle(el);
                        return style.display !== 'none' && style.visibility !== 'hidden' && !el.disabled;
                    }, locationInput);

                    if (isVisible) {
                        const currentValue = await page.evaluate(input => input.value, locationInput);
                        if (!currentValue || currentValue.trim() === "") {
                            await locationInput.click({ clickCount: 3 });
                            await locationInput.press("Backspace");
                            await locationInput.type(location, { delay: 100 });
                            console.log("📍 Filled location");
                            await randomWait();
                        }
                    }
                }

                const fileInput = await page.$('input[type="file"]');
                if (fileInput && resume) {
                    const resumePath = path.resolve(resume);
                    await fileInput.uploadFile(resumePath);
                    console.log("📄 Uploaded resume");
                    await randomWait();
                }

                let nextBtn = await page.$('button[aria-label="Continue to next step"], button[aria-label="Review your application"]');
                if (nextBtn) {
                    const isDisabled = await page.evaluate(btn => btn.disabled, nextBtn);
                    if (!isDisabled) {
                        await nextBtn.click();
                        await randomWait();
                    } else {
                        console.log("⏭️ Required fields missing, discarding...");

                        const dismissBtn = await page.$('button[aria-label="Dismiss"]');
                        if (dismissBtn) await dismissBtn.click();
                        await randomWait();

                        const discardBtn = await page.waitForSelector('button[aria-label="Discard"]', { timeout: 5000 }).catch(() => null);
                        if (discardBtn) await discardBtn.click();

                        continue;
                    }
                }

                const submitBtn = await page.$('button[aria-label="Submit application"]');
                if (submitBtn) {
                    await submitBtn.click();
                    console.log(`✅ Applied to job ${i + 1}`);
                    appliedJobs.push(i + 1);
                } else {
                    console.log(`⏩ No submit button, skipped job ${i + 1}`);
                }

                await randomWait();
            } catch (err) {
                console.log(`⚠️ Error or skipped job ${i + 1}:`, err.message);
                continue;
            }
        }

        await browser.close();
        console.log("✅ Finished applying to jobs:", appliedJobs);
        res.status(200).json({ message: "✅ Applied to Easy Apply jobs", appliedJobs });
    } catch (err) {
        console.error("❌ Error in job application:", err.message);
        res.status(500).json({ message: "❌ Job application failed", error: err.message });
    }
};

const randomWait = () =>
    new Promise((resolve) => setTimeout(resolve, Math.floor(Math.random() * 5000) + 3000));


