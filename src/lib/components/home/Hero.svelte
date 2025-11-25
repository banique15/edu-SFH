<script lang="ts">
    import { onDestroy, onMount } from "svelte";

    const heroImages: string[] = [
        "/Home/home-desktop-hero-frame-1.png",
        "/Home/home-desktop-hero-frame-2.png",
        "/Home/home-desktop-hero-frame-3.png",
        "/Home/home-desktop-hero-frame-4.png",
    ];

    let currentSlide = $state(0);
    let intervalId: ReturnType<typeof setInterval> | null = null;

    onMount(() => {
        // Auto-advance slides every 10 seconds
        intervalId = setInterval(() => {
            currentSlide = (currentSlide + 1) % heroImages.length;
        }, 10000);
    });

    onDestroy(() => {
        if (intervalId) {
            clearInterval(intervalId);
        }
    });
</script>

<!-- Hero Section -->
<section
    class="z-10 relative min-h-[400px] md:min-h-[600px] lg:min-h-[771px] overflow-hidden bg-gradient-to-br from-[#fdf9f1] to-[#f5f0e8] lg:-mt-[200px] px-4 sm:px-6 lg:py-12"
>
    <div
        class="flex flex-col md:flex-row justify-between max-w-7xl mx-auto pt-12 md:pt-20 lg:pt-[220px] pb-8 lg:pb-0 overflow-hidden"
    >
        <!-- Hero content -->
        <div
            class="relative z-10 w-full md:w-auto md:pt-[66px] md:max-w-[628px] min-w-0"
        >
            <h1
                class="text-[#349552] text-4xl sm:text-5xl md:text-6xl lg:text-[74px] font-normal leading-[0.9] tracking-[-0.02em] md:tracking-[-0.08em] lg:tracking-[-2.1px] break-words"
            >
                Inspire Change and Global Citizenship Through the Arts.
            </h1>
            <p
                class="text-black text-sm sm:text-base md:text-xl lg:text-[20px] leading-[1.23] tracking-[-0.01em] md:tracking-[-0.02em] lg:tracking-[-0.24px] max-w-full lg:max-w-[532px] mt-4 sm:mt-6 lg:mt-8"
            >
                Empower the next generation to explore and address global issues
                using the Sing for Hope Global Goals Arts Curriculum. Aligned
                with the United Nations Global Goals for Sustainable
                Development, this accessible, fun, and ready-to-use arts-based
                curriculum helps students in grades 5-12 pilot real-world
                solutions through creative writing, music, drama, dance, and
                visual art.
            </p>
        </div>

        <!-- Hero Art Section with SVG Shape Mask -->
        <div
            class="w-full max-w-sm sm:max-w-md md:max-w-lg md:w-auto flex justify-center md:justify-end mt-6 md:mt-0 relative flex-shrink-0"
        >
            <!-- Mobile SVG Mask -->
            <svg
                width="352"
                height="277"
                viewBox="0 0 352 277"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="w-full max-w-md md:max-w-lg h-auto object-contain relative md:hidden"
            >
                <defs>
                    <mask id="heroShapeMaskMobile">
                        <rect width="352" height="277" fill="black" />
                        <path
                            d="M190.001 0C197.188 0.000122468 203.014 5.82684 203.014 13.0137V86.3891C203.014 92.9661 208.345 98.2979 214.922 98.2979H338.953C346.14 98.2979 351.966 104.125 351.966 111.312V263.143C351.966 270.329 346.14 276.155 338.953 276.155H161.966C154.779 276.155 148.952 270.329 148.952 263.143V189.564C148.952 182.987 143.62 177.655 137.043 177.655H13.0127C5.82607 177.655 0.000189667 171.829 0 164.643V13.0137C0 5.82688 5.82595 0.000193985 13.0127 0H190.001Z"
                            fill="white"
                        />
                    </mask>
                </defs>
                <!-- Image Slider with Mask -->
                <g mask="url(#heroShapeMaskMobile)">
                    {#each heroImages as image, index}
                        <image
                            href={image}
                            x="0"
                            y="0"
                            width="352"
                            height="277"
                            preserveAspectRatio="xMidYMid slice"
                            opacity={index === currentSlide ? 1 : 0}
                            style="transition: opacity 1s ease-in-out;"
                        />
                    {/each}
                </g>
            </svg>
            <!-- Desktop SVG Mask -->
            <svg
                width="512"
                height="511"
                viewBox="0 0 512 511"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="hidden md:block w-full max-w-none h-auto object-contain relative"
            >
                <defs>
                    <mask id="heroShapeMaskDesktop">
                        <rect width="512" height="511" fill="black" />
                        <path
                            d="M275 0C286.046 0 295 8.95431 295 20V131.075C295 142.121 303.954 151.075 315 151.075H491.443C502.489 151.075 511.443 160.03 511.443 171.075V490.732C511.443 501.778 502.489 510.732 491.443 510.732H236.443C225.398 510.732 216.443 501.778 216.443 490.732V378.075C216.443 367.03 207.489 358.075 196.443 358.075H20C8.9543 358.075 0 349.121 0 338.075V20C0 8.95431 8.95431 0 20 0H275Z"
                            fill="white"
                        />
                    </mask>
                </defs>
                <!-- Image Slider with Mask -->
                <g mask="url(#heroShapeMaskDesktop)">
                    {#each heroImages as image, index}
                        <image
                            href={image}
                            x="0"
                            y="0"
                            width="512"
                            height="511"
                            preserveAspectRatio="xMidYMid slice"
                            opacity={index === currentSlide ? 1 : 0}
                            style="transition: opacity 1s ease-in-out;"
                        />
                    {/each}
                </g>
            </svg>
            <!-- Top Right Image - Mobile -->
            <img
                src="/Home/sdgs-mobile.png"
                alt="Sustainable Development Goals"
                class="absolute top-0 right-0 w-auto h-auto max-w-[141px] max-h-[94px] object-contain z-10 md:hidden"
            />
            <!-- Top Right Image - Desktop -->
            <img
                src="/Home/sdgs.png"
                alt="Sustainable Development Goals"
                class="hidden md:block absolute top-0 right-0 w-auto h-auto max-w-[196px] max-h-[130px] object-contain z-10"
            />
            <!-- Bottom Left Image - Mobile -->
            <img
                src="/Home/ncas-mobile.png"
                alt="NCAS National Coalition for Arts Standards"
                class="absolute bottom-0 left-0 w-auto h-auto max-w-[141px] max-h-[94px] object-contain z-10 md:hidden"
            />
            <!-- Bottom Left Image - Desktop -->
            <img
                src="/Home/ncas.png"
                alt="NCAS National Coalition for Arts Standards"
                class="hidden md:block absolute bottom-0 left-0 w-auto h-auto max-w-[196px] max-h-[130px] object-contain z-10"
            />
        </div>
    </div>
</section>
