// Dinamik olmasını istediğim html gorevlarını tanımlıyorum
let inputText = document.getElementById('inputListeElemani');
let ekleButton = document.getElementById('ekle');
let temizleButton = document.getElementById('temizle');
let toDoList = document.getElementById('eklenenGorevler');


window.onload = function() {
    alert("ÜSTÜNÜ ÇİZMEK İSTEDİĞİNİZ GÖREVİN ÜSTÜNE BİR KEZ TIKLAYIN!\nSİLMEK İSTEDİĞİNİZ GÖREVİN ÜSTÜNE İKİ KEZ TIKLAYIN!");
};

// Enter tuşuna basıldığında görev eklemek için fonksiyon
inputText.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') { // Eğer basılan tuş Enter ise
        event.preventDefault(); // Varsayılan davranışı engelle (form gönderimini önle)
        gorevEkle(); // gorevEkle fonksiyonunu çağır
    }
});

ekleButton.addEventListener('click', gorevEkle);//ekle butonuna clicklediğimde gorevEkle fonksiyonu çalışsın diyorum
temizleButton.addEventListener('click', gorevlerinTumunuSil);//temizle butonuna clicklediğimde gorevlerinTumunuSil fonksiyonu çalışsın diyorum

//kullanacağım fonksiyonları tanımlamaya başlıyorum

//listeye gorev ekleme fonksiyonu
function gorevEkle(){
  let gorev=document.createElement('p');//elmanı atayacağım p elementini oluşturdum
gorev.classList.add('gorev-styling');//oluşturduğum göreve css ile ulaşabilmek adına bir sınıf ismi verdim
toDoList.appendChild(gorev);//görev elementini toDoList elementinin altına çocuk olarak yerleştirdim
gorev.innerHTML=inputText.value;//göreve girdiğim input değerini atıyorum(innerHTML sayesinde düzenleyebiliyorum içeriği)
inputText.value="";//ekledikten sonra görev yerini temizliyorum

 // Göreve tıklanıldığında üstü çizilsin
 gorevUstunuCiz(gorev);
    
 // Göreve çift tıklanıldığında silinsin
 deleteOnDoubleClick(gorev);
}

//Göreve bir kez tıklandığında üstü çizilsin
function gorevUstunuCiz(gorev) {
    gorev.addEventListener('click', function() {
       gorev.style.textDecoration = 'line-through';
    });
}

// Paragrafa çift tıklanıldığında silmek için fonksiyon
function deleteOnDoubleClick(gorev) {
    gorev.addEventListener('dblclick', function() {
        toDoList.removeChild(gorev);
    });
}


// Tüm yapılacakları silmek için fonksiyon
function gorevlerinTumunuSil() {
    while (toDoList.firstChild) {//bu döngü toDoList içinde görev olduğu sürece çalışacaktır
        toDoList.removeChild(toDoList.firstChild);
    }
}

