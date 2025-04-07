
//let buildPosition = world(6000, 200, 6000);
let buildPosition = player.position().toWorld();
const rel = (position_: Position) => positions.add(buildPosition, position_);

const gate = () => {
    blocks.fill(Block.PolishedBlackstone, rel(pos(23, 1, 8)), rel(pos(27, 5, 9)), FillOperation.Replace);
    blocks.fill(Block.BlackstoneWall, rel(pos(23, 1, 6)), rel(pos(27, 6, 7)), FillOperation.Replace);
    blocks.fill(Block.BlackstoneWall, rel(pos(23, 5, 5)), rel(pos(27, 5, 5)), FillOperation.Replace);

    blocks.fill(AIR, rel(pos(24, 1, 5)), rel(pos(26, 4, 9)), FillOperation.Replace);
    blocks.fill(Block.DarkOakFence, rel(pos(24, 4, 8)), rel(pos(26, 4, 8)), FillOperation.Replace);
};

const bridge = () => {
    blocks.fill(blocks.blockWithData(Block.PlanksDarkOak, 1), rel(pos(24, 0, 6)), rel(pos(26, 0, 2)), FillOperation.Replace);
};

const walls = () => {
    for (let j = 1; j <= 5; j++) {
        shapes.circle(Block.BlackstoneWall, rel(pos(25, j, 25)), 20, Axis.Y, ShapeOperation.Replace);
    }
    for (let i = 1; i <= 4; i++) {
        shapes.circle(Block.PolishedBlackstone, rel(pos(25, i, 25)), 18, Axis.Y, ShapeOperation.Replace);
    }
    for (let i = 1; i <= 4; i++) {
        shapes.circle(AIR, rel(pos(25, i, 25)), 16, Axis.Y, ShapeOperation.Replace);
    }
    shapes.circle(AIR, rel(pos(25, 5, 25)), 18, Axis.Y, ShapeOperation.Replace);
};

const moat = () => {
    shapes.circle(GRASS, rel(pos(25, 0, 25)), 25, Axis.Y, ShapeOperation.Replace);
    shapes.circle(WATER, rel(pos(25, 0, 25)), 23, Axis.Y, ShapeOperation.Replace);
    shapes.circle(GRASS, rel(pos(25, 0, 25)), 20, Axis.Y, ShapeOperation.Replace);
};

const towers = () => {

    for (let j = 1; j <= 20; j++) {
        shapes.circle(Block.PolishedBlackstone, rel(pos(35, j, 25)), 4, Axis.Y, ShapeOperation.Hollow);
    }

    shapes.circle(Block.BlackstoneWall, rel(pos(35, 20, 25)), 5, Axis.Y, ShapeOperation.Replace);
    shapes.circle(Block.BlackstoneWall, rel(pos(35, 21, 25)), 5, Axis.Y, ShapeOperation.Replace);
    shapes.circle(Block.PolishedBlackstone, rel(pos(35, 20, 25)), 4, Axis.Y, ShapeOperation.Replace);
    shapes.circle(AIR, rel(pos(35, 21, 25)), 4, Axis.Y, ShapeOperation.Replace);

    for (let j = 1; j <= 20; j++) {
        shapes.circle(Block.PolishedBlackstone, rel(pos(15, j, 25)), 4, Axis.Y, ShapeOperation.Hollow);
    }

    shapes.circle(Block.BlackstoneWall, rel(pos(15, 20, 25)), 5, Axis.Y, ShapeOperation.Replace);
    shapes.circle(Block.BlackstoneWall, rel(pos(15, 21, 25)), 5, Axis.Y, ShapeOperation.Replace);
    shapes.circle(Block.PolishedBlackstone, rel(pos(15, 20, 25)), 4, Axis.Y, ShapeOperation.Replace);
    shapes.circle(AIR, rel(pos(15, 21, 25)), 4, Axis.Y, ShapeOperation.Replace);

    //floors
    shapes.circle(Block.PolishedBlackstone, rel(pos(15, 12, 25)), 4, Axis.Y, ShapeOperation.Replace);
    shapes.circle(Block.PolishedBlackstone, rel(pos(35, 12, 25)), 4, Axis.Y, ShapeOperation.Replace);

    //doors
    blocks.fill(AIR, rel(pos(31, 13, 25)), rel(pos(31, 14, 25)), FillOperation.Replace);
    blocks.place(blocks.blockWithData(DARK_OAK_DOOR, 5), rel(pos(32, 13, 25)));

    blocks.fill(AIR, rel(pos(19, 13, 25)), rel(pos(19, 14, 25)), FillOperation.Replace);
    blocks.place(blocks.blockWithData(DARK_OAK_DOOR, 7), rel(pos(18, 13, 25)));

};

const palace = () => {
    blocks.fill(Block.PolishedBlackstone, rel(pos(20, 1, 20)), rel(pos(30, 12, 30)), FillOperation.Hollow);

    blocks.fill(Block.BlackstoneWall, rel(pos(19, 12, 19)), rel(pos(19, 13, 31)), FillOperation.Replace);
    blocks.fill(Block.BlackstoneWall, rel(pos(19, 12, 31)), rel(pos(31, 13, 31)), FillOperation.Replace);
    blocks.fill(Block.BlackstoneWall, rel(pos(31, 12, 31)), rel(pos(31, 13, 19)), FillOperation.Replace);
    blocks.fill(Block.BlackstoneWall, rel(pos(31, 12, 19)), rel(pos(19, 13, 19)), FillOperation.Replace);

    //door
    blocks.fill(AIR, rel(pos(25, 1, 20)), rel(pos(25, 3, 20)), FillOperation.Replace);
    blocks.place(blocks.blockWithData(STONE_BRICK_STAIRS, 2), rel(pos(25, 1, 20)));
    blocks.place(blocks.blockWithData(DARK_OAK_DOOR, 1), rel(pos(25, 2, 21)));

    //floors
    blocks.fill(Block.PlanksDarkOak, rel(pos(21, 5, 21)), rel(pos(29, 5, 29)), FillOperation.Replace);
    blocks.fill(Block.PlanksDarkOak, rel(pos(21, 9, 21)), rel(pos(29, 9, 29)), FillOperation.Replace);

    //windows
    blocks.place(Block.TintedGlass, rel(pos(25, 3, 30)));
    blocks.place(Block.TintedGlass, rel(pos(25, 7, 30)));
    blocks.place(Block.TintedGlass, rel(pos(25, 7, 20)));

    blocks.place(Block.TintedGlass, rel(pos(25, 11, 30)));
    blocks.place(Block.TintedGlass, rel(pos(25, 11, 20)));

    //ladders
    blocks.fill(blocks.blockWithData(LADDER, 4), rel(pos(29, 2, 25)), rel(pos(29, 12, 25)), FillOperation.Replace);
}

player.onChat("castle", function () {
    moat();
    walls();
    palace();
    towers();
    gate();
    bridge();
})

player.onChat("helpCord", function () {
    blocks.place(REDSTONE_BLOCK, rel(pos(51, 1, 51)))
    blocks.place(JUNGLE_DOOR, rel(pos(51, 1, 0)))
    blocks.place(GLASS, rel(pos(0, 1, 51)))
    blocks.place(DIRT, rel(pos(-1, 1, -1)))
})

player.onChat("clear", function () {
    blocks.fill(
        AIR,
        rel(pos(0, 0, 0)),
        rel(pos(50, 10, 50)),
        FillOperation.Replace
    )
})