const ul = document.querySelector('.listOfNames')
let inputText = document.getElementById("input-name")
let todoButton = document.querySelector('.todo-btn')
let gender = document.getElementById('gender')
let checked = document.getElementById('filter-gender')


function addList(){
    let myList = document.createElement("li");
    myList.innerHTML = `<div>${inputText.value}</div>
    <div>${gender.value}</div><button class="delItem">delete</button>`
    myList.classList.add('listItem')
    myList.classList.add(`${gender.value}`)
    ul.appendChild(myList)

    myList.lastChild.addEventListener('click',deleteList)
    
    function deleteList(e){
        e.target.parentElement.remove()
    }
}

function filterGender(e){
    let arr = ul.children;
    for(let i=0;i<arr.length;i++){
        console.log(arr[i])
        arr[i].style.display = "none"
        
    }

    for(let i=0;i<arr.length;i++){
        if(e.target.value === 'MALE' && arr[i].classList[1] == 'MALE'){
            arr[i].style.display = "flex"
        }else if(e.target.value === 'FEMALE' && arr[i].classList[1] == 'FEMALE'){
            arr[i].style.display = 'flex'
        }else if(e.target.value === 'ALL'){
            arr[i].style.display = 'flex'
        }
    }
} 


checked.addEventListener('click',filterGender)
todoButton.addEventListener('click',addList)



