import { DesktopEntry } from "felixriddle.desktop-entry";

/**
 * Enable app startup
 */
export default function enableAppStartup() {
    const folderDirectory = process.cwd();
    console.log(folderDirectory);
    
    const cmd = `npm run dev`;
    const dot = new DesktopEntry("App Manager", cmd);
    dot.setName("App manager")
        .saveAtStartup();
    
    console.log(`App startup enabled`);
}
