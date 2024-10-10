import puppeteer from 'puppeteer';
import fs from 'fs/promises';
import path from 'path';

export const fetchHrefData = async (url) => {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'load' });

    const anchorData = await page.evaluate(() => {
        const anchors = Array.from(document.querySelectorAll('a'));
        return anchors.map(anchor => ({
            href: anchor.getAttribute('href'),
            label: anchor.textContent.trim(),
        }));
    });

    const validHrefAnchors = anchorData.filter(anchor => anchor.href);

    const folderPath = path.join(process.cwd(), 'extractedURLFile');
    await fs.mkdir(folderPath, { recursive: true });

    const filePath = path.join(folderPath, 'URL_and_Label_pro.json');
    const dataToSave = {
        pageURL: url,
        URLcounts: `Total number of hrefs: ${validHrefAnchors.length}`,
        anchorData: validHrefAnchors
    };

    await fs.writeFile(filePath, JSON.stringify(dataToSave, null, 2));

    const deadLinks = anchorData.filter(anchor => anchor.href === '#');
    if (deadLinks.length > 0) {
        const deadFilePath = path.join(folderPath, 'DeadLink_pro.json');
        const deadAnchorData = {
            pageURL: url,
            deadAnchorCounts: `Total number of dead links: ${deadLinks.length}`,
            invalidHref: deadLinks
        };
        await fs.writeFile(deadFilePath, JSON.stringify(deadAnchorData, null, 2));
    }

    await browser.close();
    
};
