import { useState } from "react";
import { useEffect } from "react";

const EQ_ITEMS = [
  { knife: { damage: 2, times: 2, cost: 1 } },
  { sword: { damage: 4, times: 1, cost: 2 } },
  { battleAxe: { damage: 5, times: 2, cost: 3 } },
  { legendarySword: { damage: 6, times: 4, cost: 1, healthOnUse: 2 } },
  { shield: { damage: 0, times: 1, cost: 1 } },
  { staff: { damage: 10, times: 1, cost: 3 } },
  {
    magicznaKula: {
      damage: 20,
      times: 4,
      cost: 1,
    },
  },
];

const CLASSES = {
  Rogue: {
    type: "Rogue",
    weapon: EQ_ITEMS[0],
    health: 125,
    actions: 4,
    luck: 5,
    backpack: ["key"],
  },
  Warrior: {
    type: "Knight",
    weapon: EQ_ITEMS[1],
    health: 175,
    actions: 5,
    luck: 2,
    backpack: [EQ_ITEMS[4]],
  },
  Mage: {
    type: "Mage",
    weapon: EQ_ITEMS[5],
    health: 100,
    actions: 4,
    luck: 3,
    backpack: [EQ_ITEMS[3]],
  },
};

export default function App() {
  const [player, setPlayer] = useState({
    name: "",
    money: parseInt(10),
    type: "",
    weapon: "Pała",
    health: 100,
    actions: 5,
    backpack: [],
  });

  useEffect(() => {
    let playerName;
    let chosenOne;
    const chooseClass = () => {
      playerName = prompt("Name yourself");
      chosenOne = prompt("Choose Class: Knight, Rogue or Mage", "Mage");
    };
    chooseClass();
    if (chosenOne) {
      setPlayer({
        money: 100,
        name: playerName,
        type: chosenOne,
      });
    }
  }, []);

  useEffect(() => {
    if (player.type) {
      setPlayer((prev) => {
        return {
          ...prev,
          ...CLASSES[player.type],
        };
      });
    }
  }, [player.type]);

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
