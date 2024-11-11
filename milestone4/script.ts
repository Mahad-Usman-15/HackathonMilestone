function resumebuilder(event: Event): void {
    event.preventDefault();

    const display = document.getElementById("res") as HTMLDivElement;

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const phone = (document.getElementById('Phone') as HTMLInputElement).value;
    const email = (document.getElementById('Email') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('Skills') as HTMLTextAreaElement).value;

    display.innerHTML = `
    <div style="text-align: justify; padding: 10px;">
        <center><h1 style="font-size: 24px; font-weight: bold; color:#CBDCEB ; margin-bottom: 20px;">Resume</h1></center>
        <h2 style="color: #CBDCEB; font-size: 18px;">Personal Information</h2>
        <p style="color:#F3F3E0" ><b>Name:</b><p contenteditable="true">${name}</p> </p>
        <p style="color:#F3F3E0" > <b>Phone:</b><p contenteditable="true">${phone}</p> </p>
        <p style="color:#F3F3E0" ><b>Email:</b><p contenteditable="true"> ${email}</p> </p>
        <h2 style="color: #CBDCEB; font-size: 18px;">Education</h2>
        <p style="color: #F3F3E0" contenteditable="true">${education}</p>
        <h2 style="color: #CBDCEB; font-size: 18px;">Experience</h2>
        <p style="color: #F3F3E0" contenteditable="true"> ${experience}</p>
        <h2 style="color: #CBDCEB; font-size: 18px;">Skills</h2>
        <p style="color: #F3F3E0" contenteditable="true">${skills}</p>
    </div>`;

    display.style.border = '3px solid #1F618D';
    display.style.backgroundColor = "#608BC1";
    display.style.borderRadius = "10px";
    display.style.width = "80%";
    display.style.maxWidth = "600px";
    display.style.padding = "20px";
    display.style.margin = "30px auto";
    display.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    display.style.fontFamily = "Arial, sans-serif";
    display.style.color = "#34495E";
    display.style.lineHeight = "1.8";  
    display.style.textAlign = "justify"; 
}
