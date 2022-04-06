console.log("Personal Details Form");

const name1 = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validname = false;
let validemail = false;
let validphone = false;

// validate name 
name1.addEventListener('blur', () => {
    let regex = /^([a-zA-Z]){4,20}\s([a-zA-Z]){4,20}/
    let str = name1.value;
    if (regex.test(str)) {
        const shownotvalid1 = document.getElementById('shownotvalid1');
        shownotvalid1.style.display = 'none';
        validname = true;
    }
    else {
        shownotvalid1.style.display = 'block';
        validname = false;
    }
})


//validate email
email.addEventListener('blur', () => {
    let regex = /^[a-zA-Z]([_\-\.0-9a-zA-Z]+)@([\.a-z]+)\.([a-z]){2,7}$/;
    let str = email.value;
    result = regex.exec(str);
    if (regex.test(str)) {
        const shownotvalid2 = document.getElementById('shownotvalid2');
        shownotvalid2.style.display = 'none';
        validemail = true;
    }
    else {
        shownotvalid2.style.display = 'block';
        validemail = false;
    }
})


//validate phone
phone.addEventListener('blur', () => {
    let regex = /^\((62[1-9]|63[0-9]|64[0-9]|65[0-9]|66[0-9]|67[0-9]|68[0-9]|69[0-9]|7[0-9][0-9]|8[0-9][0-9]|9[0-9][0-9])\)-(45[6-9]|46[0-9]|47[0-9]|48[0-9]|49[0-1])-[0-9][0-9][0-9][0-9]$/;

    let stateinfo = { 456: "Andhra Pradesh", 457: "Arunachal Pradesh", 458: "Assam", 459: "Bihar", 460: "Chhaattisgarh", 461: "Goa", 462: "Gujarat", 463: "Haryana", 464: "Himachal Pradesh", 465: "Jharkhand", 466: "Karnataka", 467: "Kerala", 468: "Madhya Pradesh", 469: "Maharashtra", 470: "Manipur", 471: "Meghalaya", 472: "Mizoram", 473: "Nagaland", 474: "Odisha", 475: "Punjab", 476: "Rajasthan", 477: "Sikkim", 478: "TamilNadu", 479: "Telangana", 480: "Tripura", 481: "Uttar Pradesh", 482: "Uttarakhand", 483: "West Bengal", 484: "Andman & Nicobar", 485: "Chandigarh", 486: "Dadara & Nagar Haveli & Daman diu", 487: "Delhi", 488: "Jammu & Kashmir", 489: "Ladhak", 490: "Lakshyadweep", 491: "Pudducherry" };

    let str = phone.value;
    let cmpname = str.slice(1, 4);
    result = regex.exec(str);
    let serviceprovider = '';
    if (regex.test(str)) {
        const shownotvalid3 = document.getElementById('shownotvalid3');
        shownotvalid3.style.display = 'none';
        if (cmpname > 620 && cmpname < 800) {
            serviceprovider = "Reliance Jio";
        } else {
            if (cmpname > 800 && cmpname < 921) {
                serviceprovider = "Idea";
            }
            else {
                if (cmpname > 920 && cmpname < 1000) {
                    serviceprovider = "Vodafone";
                }
            }
        }
        let statename = str.slice(6, 9);
        const showdetail = document.getElementById('showdetail');
        showdetail.innerHTML = `<p>${serviceprovider}, ${stateinfo[statename]}.</p>`
        validphone = true;
    }
    else {
        shownotvalid3.style.display = 'block';
        validphone = false;
    }
})


//on submit event
let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    if (validname && validemail && validphone) {
        let shownew = document.getElementById('shownew');
        let hideold = document.getElementById('hideold');
        hideold.style.display = 'none';
        let otpnumber = Math.floor(1000 + Math.random() * 9000);
        console.log(otpnumber);

        let str = name1.value;
        let regspace = /\s/;
        let result1 = regspace.exec(str)
        var firstname = str.slice(0, result1.index);

        let newmsg = `<P>Dear ${firstname}, Thank for your inquiry. A 4 digit verification number has been sent to your phone number, ${phone.value}. please enter in the following box and submit for confirmation: </P>
        <div class="newpage">
            <input type="number" class="otpbox" id="otp" placeholder="enter otp">
            <button id="validate" class="btnbox">Validate</button>
        </div>`;
        shownew.innerHTML = newmsg;


        //Validate otp
        let otp = document.getElementById('otp');
        let validate = document.getElementById('validate');
        validate.addEventListener('click', (e) => {
            e.preventDefault();
            if (otpnumber == otp.value) {
                setTimeout(() => {
                    shownew.innerHTML = "<h3>Validation Successfull!!</h3>";
                }, 1000);
                window.location.href = "http://pixel6.co";
            }
            else {
                setTimeout(() => {
                    shownew.innerHTML = "<h2>404(page not found)</h2>";
                }, 500);
                window.location.href = "http://pixel6.co";
            }
        })
    }
    else {
        let newele = document.createElement('p');
        newele.innerText = "**(Fill all fields)";
        newele.style.color = 'red';
        newele.style.fontSize = '14px';
        newele.style.fontStyle = 'italic';
        hideold.appendChild(newele);
    }
})







