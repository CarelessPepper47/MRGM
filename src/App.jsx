import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  const [player, setPlayer] = useState({
    name: "pawel",
    money: parseInt(10),
    class: "Warrior",
    weapon: "Pała",
    health: 100,
    actions: 5,
    backpack: [],
  });

  useEffect(() => {
    setPlayer({
      ...player,
      name: prompt("Name yourself"),
    });
  }, []);

  function instructions() {
    console.log(
      `When monster is nearby: Encounter \n"Attack" - to attack \n"Run" - to run away`
    );
    console.log(`When you encounter a Chest: \n"Yes" \n"No" \n"Break"`);
  }

  function showMe() {
    // console.log(player)
    // // for (i = 0; i < size; i++) {
    // //     console.log(Object.values(player));
    // //     for (j = 0; j = size; j++) {
    // //         console.log(Object.keys(player))
    // //     }
    // // }
    for (const property in player) {
      console.log(`${property}: ${JSON.stringify(player[property])}`);
    }
  }
  return (
    <main className="flex flex-col">
      <section className="flex flex-col">
        <button
          className="px-5 py-2 text-center bg-slate-600 border-5-black text-white"
          onClick="rollDice()"
        >
          Step
        </button>
        <button id="encounter" className="hidden" onClick="encounter()">
          Encounter
        </button>
        <button
          className="bg-red-200"
          onClick={() => {
            showMe();
          }}
        >
          Show Me
        </button>
        <button
          className=""
          //   onClick={() => {
          //     chooseWeaponToEquip();
          //   }}
        >
          EQ
        </button>
        <button className="" onClick="purchaseItem()">
          Purchase
        </button>
      </section>
      <hr className="my-5 w-2/3 mx-auto border-2" />
      <section className="flex flex-col">
        <button
          className=""
          onClick={() => {
            instructions();
          }}
        >
          Guide
        </button>
      </section>
    </main>
  );
}
