export function contacts() {
    console.log ("it's about!");
    const hero = document.createElement("div");
    const main_info = document.createElement("div");
    const footer = document.createElement("div");
    const contacts = document.createElement("p");
    const line1 = document.createElement("p");
    const line2 = document.createElement("p");
    const line3 = document.createElement("p");
    const line4 = document.createElement("p");

    const container = document.querySelector("#content");

    hero.classList.add("heroContacts");
    main_info.classList.add("main_info");
    footer.classList.add("footer");
    contacts.classList.add("contacts"); 
    line1.classList.add ("contInfo");
    line2.classList.add ("contInfo");
    line3.classList.add ("contInfo");
    line4.classList.add ("contInfo");
  

    contacts.textContent = ("Contacts");
    line1.textContent = ("Phone: +39 06 12345678");
    line2.textContent = ("Email: info@cozybistro.com");
    line3.textContent = ("123 Elegant street, Rome, Italy");
    line4.textContent = ("Cozy Bistro - Rome");
    


    container.appendChild(hero);
    hero.appendChild(main_info);
    main_info.appendChild(contacts);
    main_info.appendChild(line1);
    main_info.appendChild(line2);
    main_info.appendChild(line3);
    main_info.appendChild(line4);
    container.appendChild(footer);


}