const core=require('@actions/core')
// const github=require('@actions/github')
const exec=require('@actions/exec')

function run(){
    // Get some input values
    const bucket = core.getInput('bucket' , {require: true})
    const region = core.getInput('region' , {require: true})
    const distFolder = core.getInput('dist-folder' , {require: true})

    // Upload files to s3 using aws cli command
    const s3uri = `s3://${bucket}`
    exec.exec(`aws s3 sync ${distFolder} ${s3uri} --region ${region}`) ;



    core.notice('Hello from my JS action')

}

run();