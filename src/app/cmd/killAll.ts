import {exec} from 'child_process'

/**
 * Kill the process and all its children
 * If you are on linux process needs to be launched in detached state
 * 
 * Note: This kills this process too, so it's useless to me.
 * 
 * @param pid process identifier
 * @param signal kill signal
 */
export function killAll(pid: number, signal: string | number='SIGTERM'){
    if(process.platform == "win32") {
        exec(`taskkill /PID ${pid} /T /F`, (error, stdout, stderr)=>{
            console.log("taskkill stdout: " + stdout)
            console.log("taskkill stderr: " + stderr)
            if(error){
                console.log("error: " + error.message)
            }
        })
    } else {
        // see https://nodejs.org/api/child_process.html#child_process_options_detached
        // If pid is less than -1, then sig is sent to every process in the process group whose ID is -pid.
        process.kill(-pid, signal)
    }
}
