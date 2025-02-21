import { reactive } from "vue";
export const store = reactive ({
    CardImages: [
        {
            name: "Thank You Card",
            image: "https://images.unsplash.com/photo-1631084852402-9124cd5413d6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "Congratulations Card",
            image: "https://images.unsplash.com/photo-1631084854605-2ea7de264ebf?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "Love Card",
            image: "https://images.unsplash.com/photo-1610286347146-af3d8f9a9103?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ],
      currentIndex: 0
});