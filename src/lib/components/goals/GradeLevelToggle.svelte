<script lang="ts">
    interface Props {
        selectedGrade: string;
        onGradeChange: (grade: string) => void;
    }

    let { selectedGrade, onGradeChange }: Props = $props();

    const gradeLevels = [
        { value: "5-8", label: "Grades 5-8" },
        { value: "9-12", label: "Grades 9-12" },
    ];
</script>

<div
    class="w-full flex bg-[#FDF9F1] rounded-lg p-1 "
>
    {#each gradeLevels as grade}
        <button
            type="button"
            class="flex-1 px-6 py-2.5 rounded-md text-sm font-medium transition-all duration-200 {selectedGrade ===
            grade.value
                ? 'bg-white text-base-content shadow-sm'
                : 'bg-transparent text-base-content/70'}"
            onclick={() => onGradeChange(grade.value)}
        >
            {grade.label}
        </button>
    {/each}
</div>
