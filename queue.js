let queue = [];
let front = -1;
let rear = -1;

const display = () => {
    if(front === -1 && rear === -1){
        console.log("Empty Array");
    }else{
        console.log("Full Array is : ")
        for(let i = front; i <= rear; i++){
            console.log(queue[i]);
        }
    }
}

const peek = () => {
    if(front === -1 && rear === -1){
        console.log("Empty array nothing to peek.");
    }else{
        console.log(`Front element is : ${queue[front]}`);
    }
}

const insertElement = (element) => {
    if(front === -1 && rear === -1){
        front = rear = 1;
        queue[rear] = element;
    }else if(rear === 5){
        console.log("Array is full. You can't insert data");
    }else{ 
        rear++;
        queue[rear] = element;
    }
}

const deleteElement = () => {
    if(front >= rear ){
        console.log("All elements are deleted. You have an empty array.");
        front = -1;
        rear = -1;
    }else{
        console.log(`${queue[front]} is delete successfully.`);
        front++;
    }
}

insertElement(5);
insertElement(10);
insertElement(15);
insertElement(20);

peek();
display();
deleteElement();
peek();
display();
peek();
display();
deleteElement();
peek();
display();
peek();
display();
deleteElement();
peek();
display();
peek();
display();
deleteElement();
peek();
display();