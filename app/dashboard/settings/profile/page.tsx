import Image from "next/image";

export default function Page() {
  return (
    <main className="bg-[#0A0A0A] mt-5 p-5 rounded-lg h-fit w-[1271px]">
      <h2 className="text-2xl font-bold">My Profile</h2>
      <section className="flex justify-between mt-10 items-center border-2 rounded-lg p-5">
        <div className="flex gap-5 items-center">
          <Image
            src="/assets/img/Jose.jpeg"
            alt="avatar"
            width={100}
            height={100}
            className="rounded-full"
          />
          <div>
            <h3 className="text-2xl font-semibold">Jose Farias</h3>
            <p className="text-gray-200">Frontend Developer</p>
            <span className="text-gray-400">Quilpue, Chile</span>
          </div>
        </div>
        <button className="rounded-lg border-2 px-5 py-2 flex gap-2 hover:border-[#CCFF00]">
          <Image
            src="/assets/svgs/Pencil.svg"
            alt="pencil"
            width={20}
            height={20}
          />
          Edit Profile
        </button>
      </section>
      <section className="mt-5 border-2 rounded-lg p-5">
        <header className="flex justify-between items-center">
          <h3 className="text-2xl font-bold">Personal Information</h3>
          <button className="rounded-lg border-2 px-5 py-2 flex gap-2 hover:border-[#CCFF00]">
            <Image
              src="/assets/svgs/Pencil.svg"
              alt="pencil"
              width={20}
              height={20}
            />
            Edit Profile
          </button>
        </header>
        <div className="flex gap-24 mt-10">
          <aside className="flex flex-col gap-5">
            <div>
              <h4 className="text-gray-200 font-semibold">First Name</h4>
              <p className="">José</p>
            </div>
            <div>
              <h4 className="text-gray-200 font-semibold">Email Address</h4>
              <p className="">jose.fariasdv@gmail.com</p>
            </div>
            <div>
              <h4 className="text-gray-200 font-semibold">Bio</h4>
              <p>Front End Developer</p>
            </div>
          </aside>
          <aside className="flex flex-col gap-5">
            <div>
              <h4 className="text-gray-200 font-semibold">Last Name</h4>
              <p className="">Farias</p>
            </div>
            <div>
              <h4 className="text-gray-200 font-semibold">Phone Number</h4>
              <p className="">+56 (0) 9 3456 7890</p>
            </div>
          </aside>
        </div>
      </section>
      <section className="mt-5 border-2 rounded-lg p-5">
        <header className="flex justify-between items-center">
          <h3 className="text-2xl font-bold">Address</h3>
          <button className="rounded-lg border-2 px-5 py-2 flex gap-2 hover:border-[#CCFF00]">
            <Image
              src="/assets/svgs/Pencil.svg"
              alt="pencil"
              width={20}
              height={20}
            />
            Edit Profile
          </button>
        </header>
        <div className="flex gap-48 mt-10">
          <aside className="flex flex-col gap-5">
            <div>
              <h4 className="text-gray-200 font-semibold">Country</h4>
              <p className="">Chile</p>
            </div>
            <div>
              <h4 className="text-gray-200 font-semibold">Postal Code</h4>
              <p className="">2430000</p>
            </div>
          </aside>
          <aside className="flex flex-col gap-5">
            <div>
              <h4 className="text-gray-200 font-semibold">City/State</h4>
              <p className="">Quilpué, Valparaiso</p>
            </div>
            <div>
              <h4 className="text-gray-200 font-semibold">Street Address</h4>
              <p className="">Calle 123, Piso 1</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
