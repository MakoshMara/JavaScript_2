function replase_simbol(){
    let text = document.getElementById('before').innerHTML
    console.log(text)
    document.getElementById('after').innerHTML = text.replace(/\B'|'$/g,'"')
}

replase_simbol()

// У меня все плохо с версткой, а потренироваться с регулярными выражениями хотелось
// поэтому я тут набросала функции валидации для второго задания c выводом в консоль
function validName(name){
    if (name.match(/^[A-Za-zА-Яа-я ]+$/)){
        console.log('Валидация имени пройдена')
    }
    else{
       console.log('Нехорошее имя')
    }
}

function validmail(mail){
    if (mail.match(/^[A-Za-z\.-]+@[a-z]+\.[a-z]{2}$/)){ // сделала как указали в задании. В имени точка, тире и нет нижнего подчеркивания
        console.log('Валидация емейла пройдена')
    }
    else{
        console.log('Плохая почта')
     }

}

function valiphone(phone){
    if (phone.match(/^\+7{1}\(\d{3}\)\d{3}-\d{4}$/)){
        console.log('Валидация телефона пройдена')
    }
    else{
        console.log('Так себе телефон')
     }

}

validName('Геракл')
validName('4ертенок')
validmail('t.t.@test.ru')
validmail('t_t.@test.ru')
valiphone('+7(913)000-0000')
valiphone('+8(913)000-0000')