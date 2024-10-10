<script setup lang="ts">
import type { Faq1Type } from "~/types/types";
import { Collapse } from "vue-collapsed";

const props = defineProps<{
    data: Faq1Type;
    index: number;
    selectedIndex: number | null;
}>();

const emit = defineEmits<{
    (e: "toggle", id: number): void;
}>();

const handler = (id: number) => {
    emit("toggle", id);
};

const { answer, question } = props.data;
const isOpen = computed(() => props.selectedIndex === props.index);
</script>

<template>
    <div :class="`optech-accordion-item ${isOpen ? 'open' : ''}`">
        <div
            class="optech-accordion-header init-header"
            @click="handler(index)"
        >
            <h5>{{ question }}</h5>
        </div>
        <Collapse :when="isOpen" class="v-collapse">
            <div class="optech-accordion-body init-body">
                <p>
                    {{ answer }}
                </p>
            </div>
        </Collapse>
    </div>
</template>
