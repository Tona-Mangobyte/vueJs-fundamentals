// src/composables/useMyComposable.ts
import { reactive } from 'vue';
export const useMyComposable = () => {
    const myComposableData = reactive({
        title: 'This is my composable data',
    });
    return myComposableData;
};
//# sourceMappingURL=useMyComposable.js.map