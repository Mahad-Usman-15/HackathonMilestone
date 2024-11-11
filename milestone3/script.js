function resumebuilder(event) {
    event.preventDefault();
    var display = document.getElementById("res");
    var name = document.getElementById('name').value;
    var phone = document.getElementById('Phone').value;
    var email = document.getElementById('Email').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('Skills').value;
    display.innerHTML = "\n    <div style=\"text-align: justify; padding: 10px;\">\n        <center><h1 style=\"font-size: 24px; font-weight: bold; color:#CBDCEB ; margin-bottom: 20px;\">Resume</h1></center>\n        <h2 style=\"color: #CBDCEB; font-size: 18px;\">Personal Information</h2>\n        <p style=\"color:#F3F3E0\"><b>Name:</b> ".concat(name, "</p>\n        <p style=\"color:#F3F3E0\"> <b>Phone:</b> ").concat(phone, "</p>\n        <p style=\"color:#F3F3E0\"><b>Email:</b> ").concat(email, "</p>\n        <h2 style=\"color: #CBDCEB; font-size: 18px;\">Education</h2>\n        <p style=\"color: #F3F3E0\">").concat(education, "</p>\n        <h2 style=\"color: #CBDCEB; font-size: 18px;\">Experience</h2>\n        <p style=\"color: #F3F3E0\"> ").concat(experience, "</p>\n        <h2 style=\"color: #CBDCEB; font-size: 18px;\">Skills</h2>\n        <p style=\"color: #F3F3E0\">").concat(skills, "</p>\n    </div>");
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
