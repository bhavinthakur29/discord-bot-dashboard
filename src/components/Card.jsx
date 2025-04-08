export default function Card() {
  return (
    <>
      <div class="flex flex-col rounded-2xl w-[500px] bg-[#0a0a0a] shadow-xl">
        <figure class="flex justify-center items-center rounded-2xl">
          <img src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg" alt="Card Preview" class="rounded-t-2xl" />
        </figure>
        <div class="flex flex-col p-8">
          <div class="text-2xl font-bold  text-center text-[#ecf0f7] pb-6">Generator</div>
          <div class=" text-lg  text-center text-[#e6eaf2]">Leverage a graphical editor to create, design and customize beautiful web components.</div>
          <div class="flex justify-end pt-6">
            <button class="bg-[#9032e2] text-[#ffffff] w-full font-bold text-base  p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform">Try it out!</button>
          </div>
        </div>
      </div>
    </>
  );
};