import { reactive } from "vue";
export const store = reactive ({
    CardImages: [
        {
            name: "Birthday Card",
            image: "https://i.pinimg.com/736x/ff/a6/9b/ffa69bc1399395f0045dcb59be59f309.jpg"
        },
        {
            name: "Christmas Card",
            image: "https://img.freepik.com/free-vector/watercolor-christmas-season-cards-collection_23-2149765308.jpg?t=st=1734629413~exp=1734633013~hmac=9f629f7577fd732831925e2a23a23902682733cd45f324a0b7070c4792a6782e&w=1800"
        },
        {
            name: "Thank You Card",
            image: "https://i.pinimg.com/736x/72/50/8a/72508a63d4ff58353000a4ed7229fef0.jpg"
        },
        {
            name: "Congratulations Card",
            image: "https://i.pinimg.com/736x/35/62/ef/3562efb7518784ffe1f40ccc7d87a35e.jpg"
        },
        {
            name: "Love Card",
            image: "https://i.pinimg.com/736x/30/7b/61/307b617337ad4434f58977af86b00512.jpg"
        }
    ],
      currentIndex: 0
});