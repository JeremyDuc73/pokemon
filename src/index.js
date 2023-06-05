import kaboom from "kaboom";

kaboom({
    width: 1280,
    height: 720,
    scale: 1
});

setBackground(Color.fromHex('#36A6E0'))

loadAssets()

scene('world', (worldState)=> setWorld(worldState))
scene('battle', (worldState)=> setBattle(worldState))

go('world')






function loadAssets(){
    loadSprite('dracaufeu', './img/charizard.png')
    loadSpriteAtlas('./img/characters.png', {
        'player-down': { x: 0, y: 82, width: 16, height: 16 },
        'player-up': { x: 16, y: 82, width: 16, height: 16 },
        'player-side': { x: 0, y: 98, width: 32, height: 16, sliceX: 2, sliceY: 1,
            anims: { 'walk': { from: 0, to: 1, speed: 6 }}
        },
        'npc': { x: 32, y: 98, width: 16, height: 16 },
        'cat-mon': { x: 0, y: 16, width: 32, height: 32 },
        'spider-mon': { x: 32, y: 16, width: 32, height: 32 },
        'centipede-mon': { x: 64, y: 16, width: 32, height: 32 },
        'grass-mon': { x: 0, y: 49, width: 32, height: 32 },
        'mushroom-mon': { x: 32, y: 49, width: 32, height: 32 },
        'mini-mons': { x: 0, y: 0, width: 128, height: 16, sliceX: 8, sliceY: 1,
            anims: { 'spider': 1, 'centipede': 2, 'grass': 3 }
        }
    })
    loadSprite('battle-background', './img/battleBackground.png')
    loadSpriteAtlas('./img/tiles.png', {
        'tile': { x: 0, y: 0, width: 128, height: 128, sliceX: 8, sliceY: 8,
            anims: {
                'bigtree-pt1': 1,
                'bigtree-pt2': 2,
                'bigtree-pt3': 9,
                'bigtree-pt4': 10,
                'grass-m': 14,
                'grass-tl': 17,
                'grass-tm': 18,
                'grass-tr': 19,
                'grass-l': 25,
                'grass-r': 27,
                'grass-bl': 33,
                'grass-mb': 34,
                'grass-br': 35,
                'tree-t': 4,
                'tree-b': 12,
                'grass-water': 20,
                'sand-1': 6,
                'ground-l': 41,
                'ground-m': 42,
                'ground-r': 43,
                'rock-water': 60
            }
        }
    })
}










function setWorld(worldState) {
    function makeTile(type) {
        return [
            sprite('tile'),
            {type}
        ]
    }

    const map = [
        addLevel([
            '                 ',
            ' cdddddddddddde  ',
            ' 30000000000002  ',
            ' 30000000000002  ',
            ' 30000000000002  ',
            ' 30030000008889  ',
            ' 30030000024445  ',
            ' 300a8888897777  ',
            ' 30064444457777  ',
            ' 30000000000002  ',
            ' 30000000021111  ',
            ' 3000000002      ',
            ' 1111111111      ',
            '      b          ',
            '     b      b    ',
            ' b             b '
        ], {
            tileWidth: 16,
            tileHeight: 16,
            tiles: {
                '0': () => makeTile('grass-m'),
                '1': () => makeTile('grass-water'),
                '2': () => makeTile('grass-r'),
                '3': () => makeTile('grass-l'),
                '4': () => makeTile('ground-m'),
                '5': () => makeTile('ground-r'),
                '6': () => makeTile('ground-l'),
                '7': () => makeTile('sand-1'),
                '8': () => makeTile('grass-mb'),
                '9': () => makeTile('grass-br'),
                'a': () => makeTile('grass-bl'),
                'b': () => makeTile('rock-water'),
                'c': () => makeTile('grass-tl'),
                'd': () => makeTile('grass-tm'),
                'e': () => makeTile('grass-tr')
            }
        }),
        addLevel([
            '      12       ',
            '      34       ',
            ' 000    00  12 ',
            ' 00   00    34 ',
            ' 0    0        ',
            '      0  0     ',
            '           5   ',
            '           6   ',
            '     5         ',
            '     6   0     ',
            '               ',
            '               ',
            '               '
        ], {
            tileWidth: 16,
            tileHeight: 16,
            tiles: {
                '0': () => makeTile(),
                '1': () => makeTile('bigtree-pt1'),
                '2': () => makeTile('bigtree-pt2'),
                '3': () => makeTile('bigtree-pt3'),
                '4': () => makeTile('bigtree-pt4'),
                '5': () => makeTile('tree-t'),
                '6': () => makeTile('tree-b'),
            }
        }),
        addLevel([
            ' 00000000000000 ',
            '0     11       0',
            '0           11 0',
            '0           11 0',
            '0              0',
            '0   2          0',
            '0   2      3333 ',
            '0   2      0   0',
            '0   3333333    0',
            '0    0         0',
            '0          0000 ',
            '0          0    ',
            ' 0000000000     ',
            '                '
        ], {
            tileWidth: 16,
            tileHeight: 16,
            tiles: {
                '0': () => [
                    area({shape: new Rect(vec2(0), 16, 16)}),
                    body({isStatic: true})
                ],
                '1': () => [
                    area({
                        shape: new Rect(vec2(0), 8, 8),
                        offset: vec2(4, 4)
                    }),
                    body({isStatic: true})
                ],
                '2': () => [
                    area({shape: new Rect(vec2(0), 2, 16)}),
                    body({isStatic: true})
                ],
                '3': () => [
                    area({
                        shape: new Rect(vec2(0), 16, 20),
                        offset: vec2(0, -4)
                    }),
                    body({isStatic: true})
                ]
            }
        })
    ]

    for (const layer of map) {
        layer.use(scale(4))
        for (const tile of layer.children) {
            if (tile.type) {
                tile.play(tile.type)
            }
        }
    }

    add([sprite('dracaufeu'), area(), body({isStatic: true}), pos(100,700), scale(1), 'drac'])

    const spiderMon = add([sprite('mini-mons'), area(), body({isStatic: true}), pos(400,300), scale(4), 'spider'])
    spiderMon.play('spider')
    spiderMon.flipX = true

    const centipedeMon = add([sprite('mini-mons'), area(), body({isStatic: true}), pos(100,100), scale(4), 'centipede'])
    centipedeMon.play('centipede')

    const grassMon = add([sprite('mini-mons'), area(), body({isStatic: true}), pos(900, 570), scale(4), 'grass'])
    grassMon.play('grass')

    add([ sprite('npc'), scale(4), pos(600,700), area(), body({isStatic: true}), 'npc'])

    const player = add([
        sprite('player-down'),
        pos(500,700),
        scale(4),
        area(),
        body(),
        {
            currentSprite: 'player-down',
            speed: 300,
            isInDialogue: false
        },
    ])

    let tick = 0
    onUpdate(() => {
        camPos(player.pos)
        tick++
        if ((isKeyDown('down') || isKeyDown('up'))
            && tick % 20 === 0
            && !player.isInDialogue) {
            player.flipX = !player.flipX
        }
    })

    function setSprite(player, spriteName) {
        if (player.currentSprite !== spriteName) {
            player.use(sprite(spriteName))
            player.currentSprite = spriteName
        }
    }

    onKeyDown('down', () => {
        if (player.isInDialogue) return
        setSprite(player, 'player-down')
        player.move(0, player.speed)
    })

    onKeyDown('up', () => {
        if (player.isInDialogue) return
        setSprite(player, 'player-up')
        player.move(0, -player.speed)
    })

    onKeyDown('left', () => {
        if (player.isInDialogue) return
        player.flipX = false
        if (player.curAnim() !== 'walk') {
            setSprite(player, 'player-side')
            player.play('walk')
        }
        player.move(-player.speed, 0)

    })

    onKeyDown('right', () => {
        if (player.isInDialogue) return
        player.flipX = true
        if (player.curAnim() !== 'walk') {
            setSprite(player, 'player-side')
            player.play('walk')
        }
        player.move(player.speed, 0)
    })


    onKeyRelease('left', () => {
        player.stop()
    })

    onKeyRelease('right', () => {
        player.stop()
    })

    if (!worldState) {
        worldState = {
            playerPos : player.pos,
            faintedMons: []
        }
    }

    player.pos = vec2(worldState.playerPos)
    for (const faintedMon of worldState.faintedMons) {
        destroy(get(faintedMon)[0])
    }

    player.onCollide('npc', () => {
        player.isInDialogue = true
        const dialogueBoxFixedContainer = add([fixed()])
        const dialogueBox = dialogueBoxFixedContainer.add([
            rect(1000, 200),
            outline(5),
            pos(150, 500),
            fixed()
        ])
        const dialogue = "Defeat all monsters on this island and you'll become the champion!"
        const content = dialogueBox.add([
            text('',
                {
                    size: 42,
                    width: 900,
                    lineSpacing: 15,
                }),
            color(10,10,10),
            pos(40,30),
            fixed()
        ])

        if (worldState.faintedMons < 4) {
            content.text = dialogue
        } else {
            content.text = "You're the champion!"
        }

        onUpdate(() => {
            if (isKeyDown('space')) {
                destroy(dialogueBox)
                player.isInDialogue = false
            }
        })
    })

    function flashScreen() {
        const flash = add([rect(1280, 720), color(10,10,10), fixed(), opacity(0)])
        tween(flash.opacity, 1, 0.5, (val) => flash.opacity = val, easings.easeInBounce)
    }

    function onCollideWithPlayer(enemyName, player, worldState) {
        player.onCollide(enemyName, () => {
            flashScreen()
            setTimeout(() => {
                worldState.playerPos = player.pos
                worldState.enemyName = enemyName
                go('battle', worldState)
            }, 1000)
        })
    }



    onCollideWithPlayer('drac', player, worldState)
    onCollideWithPlayer('spider', player, worldState)
    onCollideWithPlayer('centipede', player, worldState)
    onCollideWithPlayer('grass', player, worldState)
}

function setBattle(worldState) {
    add([
        sprite('battle-background'),
        scale(1.3),
        pos(0,0)
    ])

    const enemyMon = add([
        sprite(worldState.enemyName + '-mon'),
        scale(5),
        pos(1300,100),
        opacity(1),
        {
            fainted: false
        }
    ])
    enemyMon.flipX = true

    tween(
        enemyMon.pos.x,
        1000,
        0.3,
        (val) => enemyMon.pos.x = val,
        easings.easeInSine
    )

    const playerMon = add([
        sprite('mushroom-mon'),
        scale(8),
        pos(-100, 300),
        opacity(1),
        {
            fainted: false
        }
    ])

    tween(
        playerMon.pos.x,
        300,
        0.3,
        (val) => playerMon.pos.x = val,
        easings.easeInSine
    )

    const playerMonHealthBox = add([
        rect(400, 100),
        outline(4),
        pos(1000, 400)
    ])

    playerMonHealthBox.add([
        text('MUSHROOM', {size: 32}),
        color(10,10,10),
        pos(10, 10)
    ])

    playerMonHealthBox.add([
        rect(370, 10),
        color(200,200,200),
        pos(15, 50)
    ])

    const playerMonHealthBar = playerMonHealthBox.add([
        rect(370, 10),
        color(0,200,0),
        pos(15, 50)
    ])

    tween(playerMonHealthBox.pos.x, 850, 0.3, (val) => playerMonHealthBox.pos.x = val, easings.easeInSine)

    const enemyMonHealthBox = add([
        rect(400, 100),
        outline(4),
        pos(-100, 50)
    ])

    enemyMonHealthBox.add([
        text(worldState.enemyName.toUpperCase(), {size: 32}),
        color(10,10,10),
        pos(10, 10)
    ])

    enemyMonHealthBox.add([
        rect(370, 10),
        color(200,200,200),
        pos(15, 50)
    ])

    const enemyMonHealthBar = enemyMonHealthBox.add([
        rect(370, 10),
        color(0,200,0),
        pos(15, 50)
    ])

    tween(enemyMonHealthBox.pos.x, 100, 0.3, (val) => enemyMonHealthBox.pos.x = val, easings.easeInSine)

    const box = add([
        rect(1300, 300),
        outline(4),
        pos(-2, 530)
    ])

    const content = box.add([
        text('MUSHROOM is ready to battle!', { size: 42}),
        color(10,10,10),
        pos(20,20)
    ])

    function reduceHealth(healthBar, damageDealt) {
        tween(
            healthBar.width,
            healthBar.width - damageDealt,
            0.5,
            (val) => healthBar.width = val,
            easings.easeInSine
        )
    }

    function makeMonFlash(mon) {
        tween(
            mon.opacity,
            0,
            0.3,
            (val) => {
                mon.opacity = val
                if (mon.opacity === 0) {
                    mon.opacity = 1
                }
            },
            easings.easeInBounce
        )
    }

    let phase = 'player-selection'
    onKeyPress('space', () => {
        if (playerMon.fainted || enemyMon.fainted) return

        if (phase === 'player-selection') {
            content.text = '> Tackle'
            phase = 'player-turn'
            return
        }

        if (phase === 'enemy-turn') {
            content.text = worldState.enemyName.toUpperCase() + ' attacks!'
            const damageDealt = Math.random() * 230

            if (damageDealt > 150) {
                content.text = "It's a critical hit!"
            }

            reduceHealth(playerMonHealthBar, damageDealt)
            makeMonFlash(playerMon)

            phase = 'player-selection'
            return
        }

        if (phase === 'player-turn') {
            const damageDealt = Math.random() * 230

            if (damageDealt > 150) {
                content.text = "It's a critical hit!"
            } else {
                content.text = 'MUSHROOM used tackle.'
            }

            reduceHealth(enemyMonHealthBar, damageDealt)
            makeMonFlash(enemyMon)

            phase = 'enemy-turn'
        }
    })

    function colorizeHealthBar(healthBar) {
        if (healthBar.width < 200) {
            healthBar.use(color(250, 150, 0))
        }

        if (healthBar.width < 100) {
            healthBar.use(color(200, 0, 0))
        }

    }

    function makeMonDrop(mon) {
        tween(
            mon.pos.y,
            800,
            0.5,
            (val) => mon.pos.y = val,
            easings.easeInSine
        )
    }

    onUpdate(() => {
        colorizeHealthBar(playerMonHealthBar)
        colorizeHealthBar(enemyMonHealthBar)

        if (enemyMonHealthBar.width < 0 && !enemyMon.fainted) {
            makeMonDrop(enemyMon)
            content.text = worldState.enemyName.toUpperCase() + ' fainted!'
            enemyMon.fainted = true
            setTimeout(() => {
                content.text = 'MUSHROOM won the battle!'
            }, 1000)
            setTimeout(() => {
                worldState.faintedMons.push(worldState.enemyName)
                go('world', worldState)
            }, 2000)
        }

        if (playerMonHealthBar.width < 0 && !playerMon.fainted) {
            makeMonDrop(playerMon)
            content.text = 'MUSHROOM fainted!'
            playerMon.fainted = true
            setTimeout(() => {
                content.text = 'You rush to get MUSHROOM healed!'
            }, 1000)
            setTimeout(() => {
                worldState.playerPos = vec2(500,700)
                go('world', worldState)
            }, 2000)
        }
    })
}












