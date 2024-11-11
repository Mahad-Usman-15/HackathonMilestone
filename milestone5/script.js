function resumebuilder(event) {
    event.preventDefault();
    var display = document.getElementById("res");
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var phone = document.getElementById('Phone').value;
    var email = document.getElementById('Email').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('Skills').value;
    var shareable = document.getElementById("shareablelink");
    var maindiv = document.getElementById('shareable');
    var download = document.getElementById('button');
    var resumedata = {
        name: name,
        email: email,
        phone: phone,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumedata));
    display.innerHTML = "\n    <div style=\"text-align: justify; padding: 10px;\">\n        <center><h1 style=\"font-size: 24px; font-weight: bold; color:#CBDCEB ; margin-bottom: 20px;\">Resume</h1></center>\n        <h2 style=\"color: #CBDCEB; font-size: 18px;\">Personal Information</h2>\n        <p style=\"color:#F3F3E0\" ><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span> </p>\n        <p style=\"color:#F3F3E0\" > <b>Phone:</b><span contenteditable=\"true\">").concat(phone, "</span> </p>\n        <p style=\"color:#F3F3E0\" ><b>Email:</b><span contenteditable=\"true\"> ").concat(email, "</span> </p>\n        <h2 style=\"color: #CBDCEB; font-size: 18px;\">Education</h2>\n        <p style=\"color: #F3F3E0\" contenteditable=\"true\">").concat(education, "</p>\n        <h2 style=\"color: #CBDCEB; font-size: 18px;\">Experience</h2>\n        <p style=\"color: #F3F3E0\" contenteditable=\"true\"> ").concat(experience, "</p>\n        <h2 style=\"color: #CBDCEB; font-size: 18px;\">Skills</h2>\n        <p style=\"color: #F3F3E0\" contenteditable=\"true\">").concat(skills, "</p>\n    </div>");
    var shareablelink = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    shareable.style.display = "block";
    maindiv.href = shareablelink;
    maindiv.textContent = shareablelink;
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
    download.addEventListener("click", function () {
        window.print();
    });
    window.addEventListener("DOMContentLoaded", function () {
        var link = new URLSearchParams(window.location.search);
        var username = link.get("username");
        if (username) {
            var resume = localStorage.getItem(username);
            if (resume) {
                var res = JSON.parse(resume)(document.getElementById('username')).value = username;
                var name_1 = document.getElementById('name').value = resumedata.name;
                var phone_1 = document.getElementById('Phone').value = resumedata.phone;
                var email_1 = document.getElementById('Email').value = resumedata.email;
                var education_1 = document.getElementById('education').value = resumedata.education;
                var experience_1 = document.getElementById('experience').value = resumedata.experience;
                var skills_1 = document.getElementById('Skills').value = resumedata.skills;
            }
        }
    });
}
