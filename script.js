document.addEventListener("DOMContentLoaded", function() {

    var form = document.getElementById("weather-form");
    const img = document.querySelector(".weatherImg");
    const cityOutput = document.querySelector(".city");
    const degree = document.querySelector("#degree");
    const content = document.querySelector(".content");
    const btnTheme = document.querySelector("#changeTheme");
    


    form.addEventListener("submit", function(e){
        e.preventDefault();
        
        const cityName = document.getElementById("city").value.trim();
        const apiKey = document.getElementById("api-key").value.trim();

        if (cityName === "") {
            alert("Insira um nome de uma cidade! ");
            return;
        }
        if (apiKey === "") {
            alert("Insira uma API Key válida para prosseguir! ");
            return;
        }

        consultaPrevisao(cityName,apiKey);
    })

    async function consultaPrevisao(cityName,apiKey) {
        let urlApi = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}`+`&appid=${apiKey}&units=metric`;

        try {
            await fetch(urlApi)
            .then((res)=> res.json())
            .then((data)=>{
                if (data?.cod && data.cod === "404"){
                    return alert("Cidade não encontrada!")
                }
                carregarDadosPrevisao(data);
            })
        }
        catch (error) {
            alert(error);
        }
    }

    function carregarDadosPrevisao(data) {
        cityOutput.innerHTML = `${data.name}`;
        degree.innerHTML = `Temperatura ${Math.floor(data.main.temp)}º C`;
        img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        content.style.display = "flex";
    }

    btnTheme.addEventListener('click', function(){
        document.body.classList.toggle('dark-mode');
    });
});