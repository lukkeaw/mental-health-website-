document.getElementById("consultation-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);

    fetch("https://formsubmit.co/siripassornaemjai@gmail.com", {
        method: "POST",
        body: formData
    }).then(response => {
        alert("ส่งข้อมูลไปที่อีเมลเรียบร้อย!");
        this.reset();
    }).catch(error => console.error("Error:", error));
});
