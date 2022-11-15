import { listToTree, treeToList } from "../../src/utils";

describe("treeHelper", () => {
  it("listToTree", () => {
    const list = [
      { id: "1", children: [] },
      { id: "2", children: [], pid: "1" },
      { id: "3", children: [], pid: "2" },
    ];
    const tree = listToTree(list);

    expect(tree.length).toBe(1);
    expect(tree[0].id).toBe("1");
    expect(tree[0].pid).toBe(undefined);
  });

  it("treeToList", () => {
    const tree = [
      {
        id: "1",
        children: [
          {
            id: "2",
            children: [
              {
                id: "3",
                children: [],
                pid: "2",
              },
            ],
            pid: "1",
          },
        ],
      },
    ];
    const list = treeToList(tree);

    expect(list.length).toBe(3);
    expect(list[1].pid).toBe("1");
    expect(list[2].pid).toBe("2");
  });
});
