function SubmitTheInfo() {
    debugger;
    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;
    const phoneNumber = document.getElementById("phone").value;
    const emailId = document.getElementById("email").value;

    const url = "https://localhost:7174/api/submitform/Mainmethod";

    const jsonBody = {
        FirstName: firstName,
        LastName: lastName,
        PhoneNumber: phoneNumber,
        EmailId: emailId
    };

    fetch(url, {
        method: "POST",
        body: JSON.stringify(jsonBody),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        const resultPanel = document.getElementById("resultPanel");
        resultPanel.textContent = "Details Submitted. Thanks for connecting with us!";
        resultPanel.style.color = "green";
        resultPanel.style.fontWeight = "bold";
    })
    .catch((error) => {
        console.error("Error:", error);
        const resultPanel = document.getElementById("resultPanel");
        resultPanel.textContent = "Oops! Something went wrong. Please try again.";
        resultPanel.style.color = "red";
        resultPanel.style.fontWeight = "bold";
    });
}
