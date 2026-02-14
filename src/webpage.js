// export const webpage = main();

export function main() {
    console.log("It's working")
    const hero = document.createElement("div");
    const main_info = document.createElement("div");
    const footer = document.createElement("div");
    const card_container = document.createElement("div");
    const buttons = document.createElement("div");
    const welcome = document.createElement("p");
    const name = document.createElement("p");
    const label = document.createElement("p");
    const menuBtn = document.createElement("button");
    const reservBtn = document.createElement("button");
    const footer_title = document.createElement("p");
    const card1 = document.createElement("div");
    const card2 = document.createElement("div");
    const card3 = document.createElement("div");
    const card1_head = document.createElement("p");
    const card1_body = document.createElement("p");
    const card2_head = document.createElement("p");
    const card2_body = document.createElement("p");
    const card3_head = document.createElement("p");
    const card3_body = document.createElement("p");

    const container = document.querySelector("#content");

    hero.classList.add("hero");
    hero.id = ("hp1");
    main_info.classList.add("main_info");
    footer.classList.add("footer");
    footer.id = ("hp2");
    card_container.classList.add("card_container");
    welcome.classList.add("welcome") ;
    name.classList.add("name") ;
    label.classList.add("label") ;
    menuBtn.classList.add("button") ;
    reservBtn.classList.add("button") ;
    buttons.classList.add("buttons") ;
    menuBtn.id = ("menuBtn") ;
    reservBtn.id = ("reservBtn") ;
    footer_title.classList.add("footer_title");
    card1.classList.add("card") ;
    card2.classList.add("card") ;
    card3.classList.add("card") ;
    card1_head.classList.add("card_head");
    card2_head.classList.add("card_head");
    card3_head.classList.add("card_head");
    card1_body.classList.add("card_body");
    card2_body.classList.add("card_body");
    card3_body.classList.add("card_body");

    welcome.textContent = ("Welcome to");
    name.textContent = ("Cozy Bistro");
    label.textContent = ("Authentic Italian in the Heart of Rome");
    menuBtn.textContent = ("View Menu");
    reservBtn.textContent = ("Reserve a Table");
    footer_title.textContent = ("Our Signature Dishes");
    card1_head.textContent = ("Truffle Risotto");
    card2_head.textContent = ("Grilled Octopus");
    card3_head.textContent = ("Signature Tiramisu");
    card1_body.textContent = ("Creamy arborio rice infused with black truffle and parmesan");
    card2_body.textContent = ("Tender octopus with olive oil, lemon, garlic and fresh herbs");
    card3_body.textContent = ("Layers of coffee-soaked ladyfingers, mascarpone cream and cocoa");




    container.appendChild(hero);
    hero.appendChild(main_info);
    main_info.appendChild(welcome);
    main_info.appendChild(name);
    main_info.appendChild(label);
    main_info.appendChild(buttons);
    buttons.appendChild(menuBtn);
    buttons.appendChild(reservBtn);
    container.appendChild(footer);
    footer.appendChild(footer_title);
    footer.appendChild(card_container);
    card_container.appendChild(card1);
    card_container.appendChild(card2);
    card_container.appendChild(card3);
    card1.appendChild(card1_head);
    card1.appendChild(card1_body);
    card2.appendChild(card2_head);
    card2.appendChild(card2_body);
    card3.appendChild(card3_head);
    card3.appendChild(card3_body);

}
