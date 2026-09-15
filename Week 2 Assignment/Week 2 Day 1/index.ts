// Question 1a: Construct an object from the first 3 items you saw on the navigation tab 

const laces = {
  name: "Laces",
  dropDownItems: [
    "Premium Voile Laces",
    "Limited Edition Laces",
    "Celebrant Laces",
    "French/Organza Laces",
    "Exclusive Voile Laces",
    "Guipure Lace & Cord Lace",
    "Polished Cotton Laces",
    "Lace Special Offers",
  ],
};

const waxPrints = {
  name: "Wax Prints",
  dropDownItems: ["Mitex Holland", "Mitex Holland Gold Wax"],
};

const shoesAndBags={
  name: "Shoes & Bags",
  dropDownItems: [
    "Shoe Sale!",
    "Enzo di Roma",
    "Lucia Fabiani",
    "Nadia Ferri",
    "Bellissimo",
    "Bruno Giordano",
    "Marta Fabiani",
    "Alberto Maldini",
    "The Gold Collection"
  ]
}

// Question 1b:  using typescript construct the interface of those objects
interface NavigationItem{
  name:string,
  dropDownItems:string[]
}