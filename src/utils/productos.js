const productos = [
    {
      id: 30,
      name: "El Arte de la Guerra",
      stock: 0,
      cost: 150,
      description: "Lorem dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 1500,
      image:
        "https://images.cdn2.buscalibre.com/fit-in/360x360/40/fa/40fa6a6657f79a3752fbf7a8501ccebd.jpg",
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 9,
      genero: 9,
      brandId: 95,
      packingId: null,
      category: {
        name: "Best Seller",
        id: 9
      },
      
    },
    {
      id: 29,
      name: "Padre Rico Padre Pobre",
      stock: 100,
      cost: 0,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 1500,
      image: 
        "https://contentv2.tap-commerce.com/cover/large/9789877253146_1.jpg?id_com=1113",
      
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 9,
      genero: 9,
      brandId: 95,
      packingId: null,
      category: {
        name: "Best Seller",
        id: 9
      },
      
    },
    {
      id: 76,
      name: "El Hombre en busca del Sentido",
      stock: 92,
      cost: 575,
      description: "Lorem dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 750,
      image: 
        "https://http2.mlstatic.com/D_NQ_NP_698525-MLA42138628699_062020-O.jpg"
      ,
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.030Z",
      categoryId: 1,
      genero: 1,
      brandId: 10,
      packingId: null,
      category: {
        name: "Desarrollo Personal",
        id: 1
      },
      
    },
    {
      id: 170,
      name: "La Paradoja",
      stock: 100,
      cost: 575,
      description: "Lorem dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 750,
      image: 
        "https://contentv2.tap-commerce.com/cover/large/9789872659929_1.jpg?id_com=1113"
      ,
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.032Z",
      categoryId: 1,
      brandId: 10,
      packingId: null,
      genero: 1,
      category: {
        name: "Desarrollo Personal",
        id: 1
      },
      
    },
    {
      id: 233,
      name: "El Alquimista",
      stock: 100,
      cost: 765,
      description: "Lorem dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 750,
      image: 
        "https://image.cdn0.buscalibre.com/62466766ed3adb4573224eb7.__RSF640x640__.jpg"
      ,
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.031Z",
      genero: 1,
      categoryId: 1,
      brandId: 10,
      packingId: null,
      category: {
        name: "Vinos",
        id: 1
      },
      
    },
    {
      id: 139,
      name: "Hábitos",
      stock: 100,
      cost: 490,
      description: "Lorem dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 750,
      image: 
        "https://http2.mlstatic.com/D_NQ_NP_711364-MLA42620084624_072020-O.jpg"
      ,
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.030Z",
      genero: 1,
      categoryId: 1,
      brandId: 16,
      packingId: null,
      category: {
        name: "Vinos",
        id: 1
      },
      
    },
    {
      id: 68,
      name: "Llegará un día en el que serás libre",
      stock: 89,
      cost: 490,
      description: "Lorem dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 750,
      image: 
        "https://images.cdn2.buscalibre.com/fit-in/360x360/f3/6f/f36f9b8710c1f8504cf88eb93d8b0669.jpg"
      ,
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.032Z",
      genero: 1,
      categoryId: 1,
      brandId: 16,
      packingId: null,
      category: {
        name: "Desarrollo Personal",
        id: 1
      },
      
    },
    {
      id: 222,
      name: "Tus zonas erróneas",
      stock: 100,
      cost: 300,
      description: "Lorem dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 375,
      image: 
        "https://www.elmundotenecesita.com/wp-content/uploads/2017/06/51bu7v1QH7L.jpg"
      ,
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.032Z",
      genero: 1,
      categoryId: 1,
      brandId: 16,
      packingId: null,
      category: {
        name: "Vinos",
        id: 1
      },
      
    },
    {
      id: 135,
      name: "El Poder del Pensamiento Positivo",
      stock: 100,
      cost: 490,
      description: "Lorem dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 750,
      image: 
        "https://http2.mlstatic.com/D_NQ_NP_940097-MLA47750973604_102021-O.jpg"
      ,
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.032Z",
      genero: 1,
      categoryId: 1,
      brandId: 16,
      packingId: null,
      category: {
        name: "Desarrollo Personal",
        id: 1
      }
      
    },
    {
      id: 31,
      name: "Piense y hágase Rico",
      stock: 100,
      cost: 3150,
      description: "Lorem dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 700,
      image: 
        "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/558515.jpg"
      ,
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T11:08:17.792Z",
      genero: 5,
      categoryId: 5,
      brandId: 17,
      packingId: null,
      category: {
        name: "Licores",
        id: 5
      },
      
    }
  ];

  module.exports = {
    productos,
  }