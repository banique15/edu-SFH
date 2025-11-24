<script lang="ts">
    import { getGoalSlug } from "$lib/utils/slugify";
    import type { PageData } from "../../routes/(app)/$types";

    interface Props {
        data: PageData;
    }

    let { data }: Props = $props();

    // Create a map from goal_number to goal for easy lookup
    const goalsByNumber = $derived(
        data.goals.reduce(
            (acc, goal) => {
                acc[goal.goal_number] = goal;
                return acc;
            },
            {} as Record<number, (typeof data.goals)[0]>,
        ),
    );

    function getGoalLink(goalNumber: number): string {
        const goal = goalsByNumber[goalNumber];
        return goal ? `/goals/${getGoalSlug(goal)}` : `/goals/${goalNumber}`;
    }
</script>

<!-- Lessons by Goal Section -->
<section class="py-8 md:py-12 lg:py-[60px] w-full mx-auto bg-white px-6">
    <div class="max-w-7xl mx-auto ">
        <h2
            class="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-normal leading-[0.9] tracking-[-0.03em] md:tracking-[-0.05em] lg:tracking-[-0.6px] text-black mb-6 md:mb-8 lg:mb-[60px]"
        >
            Lessons by Goal
        </h2>

        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5 lg:gap-[22px]">
            <!-- Goal 1 - No Poverty -->
            <a
                href={getGoalLink(1)}
                class="sm:col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2 h-auto min-h-[120px] md:min-h-[140px] lg:h-[167px] bg-[#E5243B] rounded-[20px] p-4 md:p-5 lg:p-[22px] flex flex-col justify-between cursor-pointer hover:shadow-lg transition-all relative before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-0 before:transition-opacity before:rounded-[20px] hover:before:opacity-10 hover:opacity-100"
            >
                <div class="flex items-start justify-between relative z-10">
                    <span
                        class="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-white leading-[1.2] md:leading-[42px] tracking-[-0.02em] md:tracking-[-0.05em] lg:tracking-[-1.04px]"
                        >1</span
                    >
                    <img
                        src="/icons/sdg-goal-1.svg"
                        alt="No Poverty icon"
                        class="h-[30px] md:h-[35px] w-auto object-contain"
                    />
                </div>
                <p
                    class="text-base sm:text-lg md:text-xl lg:text-[24px] text-white font-medium leading-[1.1] tracking-[-0.01em] md:tracking-[-0.02em] lg:tracking-[-0.24px] relative z-10"
                >
                    No Poverty
                </p>
            </a>

            <!-- Goal 2 - Zero Hunger -->
            <a
                href={getGoalLink(2)}
                class="h-auto min-h-[120px] md:min-h-[140px] lg:h-[167px] bg-[#dda63a] rounded-[20px] p-4 md:p-5 lg:p-[22px] flex flex-col justify-between cursor-pointer hover:shadow-lg transition-all relative before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-0 before:transition-opacity before:rounded-[20px] hover:before:opacity-10 hover:opacity-100"
            >
                <div class="flex items-start justify-between relative z-10">
                    <span
                        class="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-black leading-[1.2] md:leading-[42px] tracking-[-0.02em] md:tracking-[-0.05em] lg:tracking-[-1.04px]"
                        >2</span
                    >
                    <img
                        src="/icons/sdg-goal-2.svg"
                        alt="Zero Hunger icon"
                        class="h-[30px] md:h-[35px] w-auto object-contain"
                    />
                </div>
                <p
                    class="text-base sm:text-lg md:text-xl lg:text-[24px] text-black font-medium leading-[1.1] tracking-[-0.01em] md:tracking-[-0.02em] lg:tracking-[-0.24px] relative z-10"
                >
                    Zero Hunger
                </p>
            </a>

            <!-- Goal 3 - Good Health & Wellbeing -->
            <a
                href={getGoalLink(3)}
                class="h-auto min-h-[120px] md:min-h-[140px] lg:h-[167px] bg-[#388626] rounded-[20px] p-4 md:p-5 lg:p-[22px] flex flex-col justify-between cursor-pointer hover:shadow-lg transition-all relative before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-0 before:transition-opacity before:rounded-[20px] hover:before:opacity-10 hover:opacity-100"
            >
                <div class="flex items-start justify-between relative z-10">
                    <span
                        class="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-white leading-[1.2] md:leading-[42px] tracking-[-0.02em] md:tracking-[-0.05em] lg:tracking-[-1.04px]"
                        >3</span
                    >
                    <img
                        src="/icons/sdg-goal-3.svg"
                        alt="Good Health & Wellbeing icon"
                        class="h-[30px] md:h-[35px] w-auto object-contain"
                    />
                </div>
                <p
                    class="text-base sm:text-lg md:text-xl lg:text-[24px] text-white font-medium leading-[1.1] tracking-[-0.01em] md:tracking-[-0.02em] lg:tracking-[-0.24px] relative z-10"
                >
                    Good Health & Wellbeing
                </p>
            </a>

            <!-- Goal 4 - Quality Education -->
            <a
                href={getGoalLink(4)}
                class="h-auto min-h-[120px] md:min-h-[140px] lg:h-[167px] bg-[#c5192d] rounded-[20px] p-4 md:p-5 lg:p-[22px] flex flex-col justify-between cursor-pointer hover:shadow-lg transition-all relative before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-0 before:transition-opacity before:rounded-[20px] hover:before:opacity-10 hover:opacity-100"
            >
                <div class="flex items-start justify-between relative z-10">
                    <span
                        class="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-white leading-[1.2] md:leading-[42px] tracking-[-0.02em] md:tracking-[-0.05em] lg:tracking-[-1.04px]"
                        >4</span
                    >
                    <img
                        src="/icons/sdg-goal-4.svg"
                        alt="Quality Education icon"
                        class="h-[30px] md:h-[35px] w-auto object-contain"
                    />
                </div>
                <p
                    class="text-base sm:text-lg md:text-xl lg:text-[24px] text-white font-medium leading-[1.1] tracking-[-0.01em] md:tracking-[-0.02em] lg:tracking-[-0.24px] relative z-10"
                >
                    Quality Education
                </p>
            </a>

            <!-- Goal 5 - Gender Equality -->
            <a
                href={getGoalLink(5)}
                class="h-auto min-h-[120px] md:min-h-[140px] lg:h-[167px] bg-[#ff3a21] rounded-[20px] p-4 md:p-5 lg:p-[22px] flex flex-col justify-between cursor-pointer hover:shadow-lg transition-all relative before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-0 before:transition-opacity before:rounded-[20px] hover:before:opacity-10 hover:opacity-100"
            >
                <div class="flex items-start justify-between relative z-10">
                    <span
                        class="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-white leading-[1.2] md:leading-[42px] tracking-[-0.02em] md:tracking-[-0.05em] lg:tracking-[-1.04px]"
                        >5</span
                    >
                    <img
                        src="/icons/sdg-goal-5.svg"
                        alt="Gender Equality icon"
                        class="h-[30px] md:h-[35px] w-auto object-contain"
                    />
                </div>
                <p
                    class="text-base sm:text-lg md:text-xl lg:text-[24px] text-white font-medium leading-[1.1] tracking-[-0.01em] md:tracking-[-0.02em] lg:tracking-[-0.24px] relative z-10"
                >
                    Gender Equality
                </p>
            </a>

            <!-- Goal 6 - Clean Water & Sanitation -->
            <a
                href={getGoalLink(6)}
                class="h-auto min-h-[120px] md:min-h-[140px] lg:h-[167px] bg-[#26bde2] rounded-[20px] p-4 md:p-5 lg:p-[22px] flex flex-col justify-between cursor-pointer hover:shadow-lg transition-all relative before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-0 before:transition-opacity before:rounded-[20px] hover:before:opacity-10 hover:opacity-100"
            >
                <div class="flex items-start justify-between relative z-10">
                    <span
                        class="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-black leading-[1.2] md:leading-[42px] tracking-[-0.02em] md:tracking-[-0.05em] lg:tracking-[-1.04px]"
                        >6</span
                    >
                    <img
                        src="/icons/sdg-goal-6.svg"
                        alt="Clean Water & Sanitation icon"
                        class="h-[30px] md:h-[35px] w-auto object-contain"
                    />
                </div>
                <p
                    class="text-base sm:text-lg md:text-xl lg:text-[24px] text-black font-medium leading-[1.1] tracking-[-0.01em] md:tracking-[-0.02em] lg:tracking-[-0.24px] relative z-10"
                >
                    Clean Water & Sanitation
                </p>
            </a>

            <!-- Goal 7 - Affordable & Clean Energy -->
            <a
                href={getGoalLink(7)}
                class="h-auto min-h-[120px] md:min-h-[140px] lg:h-[167px] bg-[#f2ba44] rounded-[20px] p-4 md:p-5 lg:p-[22px] flex flex-col justify-between cursor-pointer hover:shadow-lg transition-all relative before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-0 before:transition-opacity before:rounded-[20px] hover:before:opacity-10 hover:opacity-100"
            >
                <div class="flex items-start justify-between relative z-10">
                    <span
                        class="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-black leading-[1.2] md:leading-[42px] tracking-[-0.02em] md:tracking-[-0.05em] lg:tracking-[-1.04px]"
                        >7</span
                    >
                    <img
                        src="/icons/sdg-goal-7.svg"
                        alt="Affordable & Clean Energy icon"
                        class="h-[30px] md:h-[35px] w-auto object-contain"
                    />
                </div>
                <p
                    class="text-base sm:text-lg md:text-xl lg:text-[24px] text-black font-medium leading-[1.1] tracking-[-0.01em] md:tracking-[-0.02em] lg:tracking-[-0.24px] relative z-10"
                >
                    Affordable &<br />Clean Energy
                </p>
            </a>

            <!-- Goal 8 - Decent Work & Economic Growth -->
            <a
                href={getGoalLink(8)}
                class="sm:col-span-2 md:col-span-1 lg:col-span-2 xl:col-span-2 h-auto min-h-[120px] md:min-h-[140px] lg:h-[167px] bg-[#a21942] rounded-[20px] p-4 md:p-5 lg:p-[22px] flex flex-col justify-between cursor-pointer hover:shadow-lg transition-all relative before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-0 before:transition-opacity before:rounded-[20px] hover:before:opacity-10 hover:opacity-100"
            >
                <div class="flex items-start justify-between relative z-10">
                    <span
                        class="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-white leading-[1.2] md:leading-[42px] tracking-[-0.02em] md:tracking-[-0.05em] lg:tracking-[-1.04px]"
                        >8</span
                    >
                    <img
                        src="/icons/sdg-goal-8.svg"
                        alt="Decent Work & Economic Growth icon"
                        class="h-[30px] md:h-[35px] w-auto object-contain"
                    />
                </div>
                <p
                    class="text-base sm:text-lg md:text-xl lg:text-[24px] text-white font-medium leading-[1.1] tracking-[-0.01em] md:tracking-[-0.02em] lg:tracking-[-0.24px] relative z-10"
                >
                    Decent Work & Economic Growth
                </p>
            </a>

            <!-- Goal 9 - Industry, Innovation & Infrastructure -->
            <a
                href={getGoalLink(9)}
                class="h-auto min-h-[120px] md:min-h-[140px] lg:h-[167px] bg-[#fa6622] rounded-[20px] p-4 md:p-5 lg:p-[22px] flex flex-col justify-between cursor-pointer hover:shadow-lg transition-all relative before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-0 before:transition-opacity before:rounded-[20px] hover:before:opacity-10 hover:opacity-100"
            >
                <div class="flex items-start justify-between relative z-10">
                    <span
                        class="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-white leading-[1.2] md:leading-[42px] tracking-[-0.02em] md:tracking-[-0.05em] lg:tracking-[-1.04px]"
                        >9</span
                    >
                    <img
                        src="/icons/sdg-goal-9.svg"
                        alt="Industry, Innovation & Infrastructure icon"
                        class="h-[30px] md:h-[35px] w-auto object-contain"
                    />
                </div>
                <p
                    class="text-base sm:text-lg md:text-xl lg:text-[24px] text-white font-medium leading-[1.1] tracking-[-0.01em] md:tracking-[-0.02em] lg:tracking-[-0.24px] relative z-10"
                >
                    Industry, Innovation & Infrastructure
                </p>
            </a>

            <!-- Goal 10 - Reduced Inequalities -->
            <a
                href={getGoalLink(10)}
                class="col-span-1 md:col-span-2 lg:col-span-1 h-auto min-h-[120px] md:min-h-[140px] lg:h-[167px] bg-[#dd1367] rounded-[20px] p-4 md:p-5 lg:p-[22px] flex flex-col justify-between cursor-pointer hover:shadow-lg transition-all relative before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-0 before:transition-opacity before:rounded-[20px] hover:before:opacity-10 hover:opacity-100"
            >
                <div class="flex items-start justify-between relative z-10">
                    <span
                        class="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-white leading-[1.2] md:leading-[42px] tracking-[-0.02em] md:tracking-[-0.05em] lg:tracking-[-1.04px]"
                        >10</span
                    >
                    <img
                        src="/icons/sdg-goal-10.svg"
                        alt="Reduced Inequalities icon"
                        class="h-[30px] md:h-[35px] w-auto object-contain"
                    />
                </div>
                <p
                    class="text-base sm:text-lg md:text-xl lg:text-[24px] text-white font-medium leading-[1.1] tracking-[-0.01em] md:tracking-[-0.02em] lg:tracking-[-0.24px] relative z-10"
                >
                    Reduced Inequalities
                </p>
            </a>

            <!-- Goal 11 - Sustainable Cities & Communities -->
            <a
                href={getGoalLink(11)}
                class=" h-auto min-h-[120px] md:min-h-[140px] lg:h-[167px] bg-[#fd9d24] rounded-[20px] p-4 md:p-5 lg:p-[22px] flex flex-col justify-between cursor-pointer hover:shadow-lg transition-all relative before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-0 before:transition-opacity before:rounded-[20px] hover:before:opacity-10 hover:opacity-100"
            >
                <div class="flex items-start justify-between relative z-10">
                    <span
                        class="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-black leading-[1.2] md:leading-[42px] tracking-[-0.02em] md:tracking-[-0.05em] lg:tracking-[-1.04px]"
                        >11</span
                    >
                    <img
                        src="/icons/sdg-goal-11.svg"
                        alt="Sustainable Cities & Communities icon"
                        class="h-[30px] md:h-[35px] w-auto object-contain"
                    />
                </div>
                <p
                    class="text-base sm:text-lg md:text-xl lg:text-[24px] text-black font-medium leading-[1.1] tracking-[-0.01em] md:tracking-[-0.02em] lg:tracking-[-0.24px] relative z-10"
                >
                    Sustainable Cities<br />& Communities
                </p>
            </a>

            <!-- Goal 12 - Responsible Consumption & Production -->
            <a
                href={getGoalLink(12)}
                class="h-auto min-h-[120px] md:min-h-[140px] lg:h-[167px] bg-[#bf8b2e] rounded-[20px] p-4 md:p-5 lg:p-[22px] flex flex-col justify-between cursor-pointer hover:shadow-lg transition-all relative before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-0 before:transition-opacity before:rounded-[20px] hover:before:opacity-10 hover:opacity-100"
            >
                <div class="flex items-start justify-between relative z-10">
                    <span
                        class="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-white leading-[1.2] md:leading-[42px] tracking-[-0.02em] md:tracking-[-0.05em] lg:tracking-[-1.04px]"
                        >12</span
                    >
                    <img
                        src="/icons/sdg-goal-12.svg"
                        alt="Responsible Consumption & Production icon"
                        class="h-[30px] md:h-[35px] w-auto object-contain"
                    />
                </div>
                <p
                    class="text-base sm:text-lg md:text-xl lg:text-[24px] text-white font-medium leading-[1.1] tracking-[-0.01em] md:tracking-[-0.02em] lg:tracking-[-0.24px] relative z-10"
                >
                    Responsible Consumption & Production
                </p>
            </a>

            <!-- Goal 13 - Climate Action -->
            <a
                href={getGoalLink(13)}
                class="h-auto min-h-[120px] md:min-h-[140px] lg:h-[167px] bg-[#3f7e44] rounded-[20px] p-4 md:p-5 lg:p-[22px] flex flex-col justify-between cursor-pointer hover:shadow-lg transition-all relative before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-0 before:transition-opacity before:rounded-[20px] hover:before:opacity-10 hover:opacity-100"
            >
                <div class="flex items-start justify-between relative z-10">
                    <span
                        class="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-white leading-[1.2] md:leading-[42px] tracking-[-0.02em] md:tracking-[-0.05em] lg:tracking-[-1.04px]"
                        >13</span
                    >
                    <img
                        src="/icons/sdg-goal-13.svg"
                        alt="Climate Action icon"
                        class="h-[30px] md:h-[35px] w-auto object-contain"
                    />
                </div>
                <p
                    class="text-base sm:text-lg md:text-xl lg:text-[24px] text-white font-medium leading-[1.1] tracking-[-0.01em] md:tracking-[-0.02em] lg:tracking-[-0.24px] relative z-10"
                >
                    Climate Action
                </p>
            </a>

            <!-- Goal 14 - Life Below Water -->
            <a
                href={getGoalLink(14)}
                class="h-auto min-h-[120px] md:min-h-[140px] lg:h-[167px] bg-[#0a97d9] rounded-[20px] p-4 md:p-5 lg:p-[22px] flex flex-col justify-between cursor-pointer hover:shadow-lg transition-all relative before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-0 before:transition-opacity before:rounded-[20px] hover:before:opacity-10 hover:opacity-100"
            >
                <div class="flex items-start justify-between relative z-10">
                    <span
                        class="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-white leading-[1.2] md:leading-[42px] tracking-[-0.02em] md:tracking-[-0.05em] lg:tracking-[-1.04px]"
                        >14</span
                    >
                    <img
                        src="/icons/sdg-goal-14.svg"
                        alt="Life Below Water icon"
                        class="h-[30px] md:h-[35px] w-auto object-contain"
                    />
                </div>
                <p
                    class="text-base sm:text-lg md:text-xl lg:text-[24px] text-white font-medium leading-[1.1] tracking-[-0.01em] md:tracking-[-0.02em] lg:tracking-[-0.24px] relative z-10"
                >
                    Life Below Water
                </p>
            </a>

            <!-- Goal 15 - Life on Land -->
            <a
                href={getGoalLink(15)}
                class="sm:col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2 h-auto min-h-[120px] md:min-h-[140px] lg:h-[167px] bg-[#56c02b] rounded-[20px] p-4 md:p-5 lg:p-[22px] flex flex-col justify-between cursor-pointer hover:shadow-lg transition-all relative before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-0 before:transition-opacity before:rounded-[20px] hover:before:opacity-10 hover:opacity-100"
            >
                <div class="flex items-start justify-between relative z-10">
                    <span
                        class="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-black leading-[1.2] md:leading-[42px] tracking-[-0.02em] md:tracking-[-0.05em] lg:tracking-[-1.04px]"
                        >15</span
                    >
                    <img
                        src="/icons/sdg-goal-15.svg"
                        alt="Life on Land icon"
                        class="h-[30px] md:h-[35px] w-auto object-contain"
                    />
                </div>
                <p
                    class="text-base sm:text-lg md:text-xl lg:text-[24px] text-black font-medium leading-[1.1] tracking-[-0.01em] md:tracking-[-0.02em] lg:tracking-[-0.24px] relative z-10"
                >
                    Life on Land
                </p>
            </a>

            <!-- Goal 16 - Peace, Justice & Strong Institutions -->
            <a
                href={getGoalLink(16)}
                class="h-auto min-h-[120px] md:min-h-[140px] lg:h-[167px] bg-[#00689d] rounded-[20px] p-4 md:p-5 lg:p-[22px] flex flex-col justify-between cursor-pointer hover:shadow-lg transition-all relative before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-0 before:transition-opacity before:rounded-[20px] hover:before:opacity-10 hover:opacity-100"
            >
                <div class="flex items-start justify-between relative z-10">
                    <span
                        class="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-white leading-[1.2] md:leading-[42px] tracking-[-0.02em] md:tracking-[-0.05em] lg:tracking-[-1.04px]"
                        >16</span
                    >
                    <img
                        src="/icons/sdg-goal-16.svg"
                        alt="Peace, Justice & Strong Institutions icon"
                        class="h-[30px] md:h-[35px] w-auto object-contain"
                    />
                </div>
                <p
                    class="text-base sm:text-lg md:text-xl lg:text-[24px] text-white font-medium leading-[1.1] tracking-[-0.01em] md:tracking-[-0.02em] lg:tracking-[-0.24px] relative z-10"
                >
                    Peace, Justice & Strong Institutions
                </p>
            </a>

            <!-- Goal 17 - Partnerships for the Goals -->
            <a
                href={getGoalLink(17)}
                class="col-span-2 sm:col-span-2 lg:col-span-1 h-auto min-h-[120px] md:min-h-[140px] lg:h-[167px] bg-[#19486a] rounded-[20px] p-4 md:p-5 lg:p-[22px] flex flex-col justify-between cursor-pointer hover:shadow-lg transition-all relative before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-0 before:transition-opacity before:rounded-[20px] hover:before:opacity-10 hover:opacity-100"
            >
                <div class="flex items-start justify-between relative z-10">
                    <span
                        class="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-white leading-[1.2] md:leading-[42px] tracking-[-0.02em] md:tracking-[-0.05em] lg:tracking-[-1.04px]"
                        >17</span
                    >
                    <img
                        src="/icons/sdg-goal-17.svg"
                        alt="Partnerships for the Goals icon"
                        class="h-[30px] md:h-[35px] w-auto object-contain"
                    />
                </div>
                <p
                    class="text-base sm:text-lg md:text-xl lg:text-[24px] text-white font-medium leading-[1.1] tracking-[-0.01em] md:tracking-[-0.02em] lg:tracking-[-0.24px] relative z-10"
                >
                    Partnerships for<br />the Goals
                </p>
            </a>
        </div>
    </div>
</section>
