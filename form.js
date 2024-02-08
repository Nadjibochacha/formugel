
    
    let bidagP = document.getElementById("flexRadioDefault1");
    let resP = document.getElementById("flexRadioDefault2");
    let bidSec = document.getElementById("fucPr");
    let resSec = document.getElementById("resPr");
    let reclame = document.querySelector("textarea");
    let submit = document.getElementById('submit');
    let body = "";
    let isEmpty= false;
    function bodyFun() {
        let selects = document.querySelectorAll("select");
        let inputs = document.querySelectorAll("input");
        if (bidagP.checked) {
            body = "Email: " + inputs[0].value +
                "<br/>Name:  " + inputs[1].value +
                "<br/> Student number:  " + inputs[2].value +
                "<br/>Problem type:  " + bidagP.value +
                "<br/>Faculty:  " + selects[0].value +
                "<br/>Specialty:  " + inputs[5].value +
                "<br/>Year:  " + selects[1].value +
                "<br/>The problem:  " + reclame.value;
        } else if (resP.checked){
            body = "Email: " + inputs[0].value +
                "<br/>Name:  " + inputs[1].value +
                "<br/> Student number:  " + inputs[2].value +
                "<br/>Problem type:  " + resP.value +
                "<br/>Residence:  " + inputs[5].value +
                "<br/>Service:  " + inputs[6].value +
                "<br/>The problem:  " + reclame.value;
        }
        inputs.forEach(input => {
            if (input.value.trim() === "") {
                isEmpty = true;
            }else{
                isEmpty = false;
                return "";
            }
        })
    }
    function verifyType() {
        if (bidagP.checked) {
            bidSec.innerHTML = `<div class="col-md-6 mt-3">
                <label for="inputState" class="form-label">* الكلية التي تدرس فيها</label>
                <select id="inputState" class="form-select" required >
                    <option selected>Choose...</option>
                    <option>كلية التكنولوجيات الحديثة للمعلومات والإتصال</option>
                    <option>كلية علم النفس وعلوم التربية</option>
                    <option>كلية العلوم الإقتصادية، العلوم التجارية وعلوم التسيير</option>
                    <option>كلية العلوم الإنسانية والإجتماعية</option>
                    <option>معهد علم المكتبات والأرشيف</option>
                    <option>معهد علوم التقنيات والنشاطات البدنية والرياضية</option>
                </select>
            </div>
            <div class="col-md-6 mt-3">
                <label for="inputspe" class="form-label">* اسم التخصص</label>
                <input type="text" class="form-control" id="inputspe" required />
            </div>
            <div class="col-12 mt-3">
                <label for="inputYear" class="form-label">* السنة التي تدرس فيها</label>
                <select id="inputYear" class="form-select" required >
                    <option selected>Choose...</option>
                    <option>أولى ليسانس</option>
                    <option>ثانية ليسانس</option>
                    <option>ثالثة ليسانس</option>
                    <option>أولى ماستر</option>
                    <option>ثانية ماستر</option>
                    <option>دكتوراه</option>
                    <option>أولى مهندس دولة</option>
                    <option>ثانية مهندس دولة</option>
                </select>
            </div>`;
            resSec.innerHTML = '';
            
        } else if (resP.checked) {
            bidSec.innerHTML = '';
            resSec.innerHTML = `<div  class="col-12 mt-3">
                <label for="inputres" class="form-label">*  إسم الإقامة الجامعية</label>
                <input type="text" class="form-control" id="inputres" required />
            </div>
            <div class="col-12 mt-3">
                <label for="inputserv" class="form-label">* إسم المصلحة</label>
                <input type="text" class="form-control" id="inputserv" required />
            </div>`; 
        }
    }
    
    function sendEmail() {
        bodyFun();
        if (isEmpty) {
            Email.send({
                Host: "smtp.elasticemail.com",
                Username: "nadjib.chacha@univ-constantine2.dz",
                Password: "392B2556AE5AF06D4847EADD0794219F30B3",
                To: "ndjbchch@gmail.com",
                From: "nadjib.chacha@univ-constantine2.dz",
                Subject: "إستمارة تسجيل الشكاوي، الاتحاد العام الطلابي الحر فرع قسنطينة 2",
                Body:body 
            })
            alert( "شكرا لملإ الاستمارة, سنسعى جاهدين من أجل حل مشاكلكم بإذن الله تعالى.")
    
        }
    }
