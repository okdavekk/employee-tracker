const fs = require('fs');

const generatePage = ({
    managerName,
    managerID,
    managerEmail,
    managerOfficeNumber,
    engineerName,
    engineerID,
    engineerEmail,
    engineerGitHub,
    internName,
    internID,
    internEmail,
    internSchool,

}) => {
    console.log('GENERATING PAGE...');

    const template = (
        `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile Generator</title>
            <link rel="stylesheet" href="https://cdn.simplecss.org/simple.min.css">
        </head>
        
        <header> Team Profile Generator</header>
        
        <body>
        <section>
            <h4>Manager</h2>
                <p>Name: ${managerName}</p>
                <p>Employee ID: ${managerID}</p>
                <p>Email Address:
                    <a href="mailto:${managerEmail}">${managerEmail}</a>
                </p>
                <p>Office Number: ${managerOfficeNumber}
                <p>
        </section>


        <section>
        <h4>Engineer</h2>
            <p>Name: ${engineerName}</p>
            <p>Employee ID: ${engineerID}</p>
            <p>Email Address:
                <a href="mailto:${engineerEmail}">${engineerEmail}</a>
            </p>
            <p>Github: 
            <a href="https://github.com/${engineerGitHub}">${engineerGitHub}</a>
        </section>
    
        <section>
        <h4>Intern</h2>
            <p>Name: ${internName}</p>
            <p>Employee ID: ${internID}</p>
            <p>Email Address:
                <a href="mailto:${internEmail}">${internEmail}</a>
            </p>
            <p>Office Number: ${internSchool}
            <p>
        </section>

        
    </body>
        
        </html>
`

    );

    fs.writeFileSync('./output/index.html', template)
    console.log('TEMPLATE GENERATED!')
    process.exit();
};


module.exports = {
    generatePage,
};

