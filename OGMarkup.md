# Open Graph Image Markup

The open-graph images can be edited by using the [Vercel OG Playground](https://og-playground.vercel.app/) with the markup below and then exporting the image.

## Default image

<details>
	<summary>Markup</summary>
	<div>
	<pre>
	```jsx
	<div
		tw="flex justify-center items-center w-full h-full bg-[#fffcf5] font-semibold"
	>
		<div tw="absolute top-[42px] left-[42px] flex items-center">
			<span tw="bg-black w-[30px] h-[30px]" />
			<span tw="font-semibold text-3xl ml-4">
				seancassiere.com
			</span>
		</div>
		<div
		tw="flex flex-wrap justify-center text-center text-white bg-black py-[20px] px-[50px] w-auto max-w-[850px] text-6xl"
		style={{
			lineHeight: 1.4,
		}}
		>
			passionate about the web and open source 🚀
		</div>
	</div>
	```
	</pre>
	</div>
</details>

## Blog post Image

<details>
	<summary>Markup</summary>
	<div>
	<pre>
	```tsx
	<div tw="flex flex-col w-full h-full justify-between bg-[#fffcf5] py-8">
		<div tw="flex flex-col w-full justify-center px-10">
			<p tw="text-3xl mb-5 font-medium text-neutral-600">Sunday</p>
			<h1 tw="text-6xl font-bold -mt-1 leading-snug">Hello</h1>
		</div>
		<div
			tw="flex w-full items-center justify-between border-t border-zinc-200 pt-8 px-10"
		>
			<div tw="flex items-center">
				<span tw="w-[30px] h-[30px] bg-black mr-3" />
				<p tw="font-semibold text-3xl">Google</p>
			</div>
			<div tw="text-3xl text-neutral-900">by Sean</div>
		</div>
	</div>
	```
	</pre>
	</div>
</details>
