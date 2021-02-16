import React from 'react'

const Testimonials = () => {
    return (
        <>
            <section class=" bg-gray-100">
	<div class="container flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
		<h1 class="text-3xl font-semibold leading-none text-center">What our clients say about us</h1>
	</div>
	<div class="container grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
		<div class="flex flex-col items-center mx-12 lg:mx-0">
			<div class="relative text-center">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="absolute top-0 left-0 w-8 h-8 text-coolGray-300">
					<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
					<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"> </path>
				</svg>
				<p class="px-6 py-1 text-lg italic"> I absolutely love staying here for a few days at the DECK B and B. The owners are always around and help in any way possible. The place itself is gorgeous and there is a ton to do.</p>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="absolute bottom-0 right-0 w-8 h-8 text-coolGray-300">
					<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
					<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
				</svg>
			</div>
			<span class="w-12 h-1 my-2 rounded-lg bg-violet-600"></span>
			<p>Johnathon Mayo</p>
		</div>
		<div class="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
			<div class="relative text-center">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="absolute top-0 left-0 w-8 h-8 text-coolGray-300">
					<path fill="currentColor" d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
					<path fill="currentColor" d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
				</svg>
				<p class="px-6 py-1 text-lg italic">The best food on the island and one of the best views around. Close enough to everything  but far enough away to feel like you are in the jungle. We had a great time and will be back.</p>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="absolute bottom-0 right-0 w-8 h-8 text-coolGray-300">
					<path fill="currentColor" d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
					<path fill="currentColor" d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
				</svg>
			</div>
			<span class="w-12 h-1 my-2 rounded-lg bg-violet-600"></span>
			<p>Nancy Callisethis</p>
		</div>
	</div>
</section>
        </>
    )
}

export default Testimonials
