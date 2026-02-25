
const menu_starters = [
    {
      name: "Bruschetta al Pomodoro",
      price: 250,
      description: "Tomato, basil, garlic on toasted bread",
      category: "Starters"
    },
    {
      name: "Creamy Mushroom Soup",
      price: 150,
      description: "Rich blend with cream and wild mushrooms",
      category: "Starters"
    },
    {
      name: "Grilled Caesar Salad",
      price: 160,
      description: "Romaine, parmesan, croutons, caesar dressing",
      category: "Starters"
    }
]
const menu_main_courses = [
    {
      name: "Garlic Bread",
      price: 250,
      description: "Toasted with garlic butter and herbs",
      category: "Main Courses"
    },
    {
      name: "Pan-Seared Salmon",
      price: 190,
      description: "Served with lemon herb sauce",
      category: "Main Courses"
    },
]
const menu_pasta = [
    {
      name: "Truffle Risotto",
      price: 160,
      description: "Creamy arborio rice with black truffle & parmesan",
      category: "Pasta & Risotto"
    },
    {
      name: "Margherita Pizza",
      price: 150,
      description: "Classic tomato, mozzarella, basil (listed here as pasta/risotto crossover in image)",
      category: "Pasta & Risotto"
    },
]
const menu_salads = [
    {
      name: "Grilled Caesar Salad",
      price: 160,
      description: "Romaine hearts, grilled, caesar dressing",
      category: "Salads"
    },
    {
      name: "Grilled Salad",
      price: 100,
      description: "Mixed greens, grilled vegetables",
      category: "Salads"
    },
]

const menu_desserts = [
    {
      name: "Tiramisu",
      price: 160,
      category: "Desserts"
    }
]

export function menu() {
    const container = document.querySelector("#content");
    const menu_frame = document.createElement("div");
    const title_container = document.createElement("div");
    const title = document.createElement("p");
    const block_container = document.createElement("div");


    title.textContent = ("Menu");
    menu_frame.classList.add("menu_frame");
    title_container.classList.add ("title_menu");
    block_container.classList.add ("block_container");
    container.classList.add("container_menu");


    function createItem (item,block) {
        const item_div = document.createElement("div");
        const item_name = document.createElement("h3");
        const item_price = document.createElement("p");
        const item_description = document.createElement("p");

        item_div.classList.add ("block");

        item_name.textContent = `${item.name}`;
        item_price.textContent = `$ ${item.price}`;
        item_description.textContent = `${item.description}`;

        item_description.style.fontStyle = "italic";

        item_div.append(item_name);
        item_div.append(item_description);
        item_div.append(item_price);
       

        block.append(item_div);
        };


    const menuTitle1 = document.createElement("h1");
    const menuTitle2 = document.createElement("h1");
    const menuTitle3 = document.createElement("h1");
    const menuTitle4 = document.createElement("h1");
    const menuTitle5 = document.createElement("h1");
    menuTitle1.textContent = (menu_starters[0].category);
    menuTitle2.textContent = (menu_main_courses[0].category);
    menuTitle3.textContent = (menu_pasta[0].category);
    menuTitle4.textContent = (menu_salads[0].category);
    menuTitle5.textContent = (menu_desserts[0].category);
    

    function addItems(){
        const block1 = document.createElement("div");
        block1.appendChild(menuTitle1);  
        menu_starters.forEach (item => createItem(item,block1));
        block_container.appendChild(block1);

        const block2 = document.createElement("div");
        block2.appendChild(menuTitle2);  
        menu_main_courses.forEach (item => createItem(item,block2));
        block_container.appendChild(block2);

        const block3 = document.createElement("div");
        block3.appendChild(menuTitle3);  
        menu_pasta.forEach (item => createItem(item,block3));
        block_container.appendChild(block3);

        const block4 = document.createElement("div");
        block4.appendChild(menuTitle4);  
        menu_salads.forEach (item => createItem(item,block4));
        block_container.appendChild(block4);

        const block5 = document.createElement("div");
        block5.appendChild(menuTitle5);  
        menu_desserts.forEach (item => createItem(item,block5));
        block_container.appendChild(block5);
    }       
    addItems();

    menu_frame.appendChild(title_container);
    title_container.appendChild(title);
    menu_frame.appendChild(block_container);
    container.appendChild(menu_frame);
}   