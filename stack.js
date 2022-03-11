let stackSize = 5;
let stack = [];
let top = -1;

const insert = value => {
    if(top >= stackSize-1){
        console.log("Your stack is full. You can't push/insert any data into the stack.");
    }else{
        top++;
        stack[top] = value;
    }
}

const peek = () => {
    if(top === -1){
        console.log("Empty array!! Top position is -1. So you can't peek element from stack.");
    }else{
        console.log("Top most element is :", stack[top]);
    }
}

const display = () => {
    console.log("Present Array : ");
    if(top === -1){
        console.log("Empty Array.");
    }else{
        for(let i = top; i >= 0; i--){
            console.log(stack[i]);
        }
    }
}

const deleteElement = () => {
    if(top === -1){
        console.log("Empty Array. In this array have no element to delete.");
    }else{
        console.log(`${stack[top]} is deleted successfully.`);
        top--;
    }
}

insert(10);
insert(20);
insert(30);
insert(40);
insert(50);
peek();
display();
deleteElement();
peek();
display();
deleteElement();