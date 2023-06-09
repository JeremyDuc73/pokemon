import kaboom from "kaboom";

kaboom({
    width: 980,
    height: 720,
    scale: 1
});

setBackground(Color.fromHex('#000000'))

loadAssets()

scene('world', (worldState)=> setWorld(worldState))
scene('battle', (worldState)=> setBattle(worldState))

go('world')






function loadAssets(){
    loadSprite('maison', "./img/maison.png")
    loadSprite('zekrom', './img/zekrom.png')
    loadSprite('arceus', './img/arceus.png')
    loadSprite('kyurem', './img/kyurem.png')
    loadSprite('giratina', './img/giratina.png')
    loadSprite('rayquaza', './img/rayquaza.png')
    loadSpriteAtlas('./img/trainer.png', {
        'player-down': { x: 0, y: 0, width: 128, height: 48, sliceX: 4, sliceY: 1,
            anims: { 'walk': { from: 0, to: 3, speed: 5 }}
        },
        'player-up': { x: 0, y: 144, width: 128, height: 48, sliceX: 4, sliceY: 1,
            anims: { 'walk': { from: 0, to: 3, speed: 5 }}
        },
        'player-side': { x: 0, y: 48, width: 128, height: 48, sliceX: 4, sliceY: 1,
            anims: { 'walk': { from: 0, to: 3, speed: 5 }}
        },
    })
    loadSprite('npc', './img/prof.png')
    loadSprite('battle-background', './img/battlebg.png')
    loadSprite('battleplayerbase', './img/playerbase.png')
    loadSprite('battleenemybase', './img/enemybase.png')
    loadSpriteAtlas('./img/tiles.png', {
        'tile': { x: 0, y: 0, width: 416, height: 224, sliceX: 13, sliceY: 7,
            anims: {
                'grass': 0,
                'tall-grass': 1,
                'dirt-tl': 2,
                'dirt-tm': 3,
                'dirt-tr': 4,
                'dirt-ml': 15,
                'dirt-m': 16,
                'dirt-mr': 17,
                'dirt-bl': 28,
                'dirt-bm': 29,
                'dirt-br': 30,
                'water-tl': 5,
                'water-tm': 6,
                'water-tr': 7,
                'water-ml': 18,
                'water-m': 19,
                'water-mr': 20,
                'water-bl': 31,
                'water-bm': 32,
                'water-br': 33,
                'fence-l': 44,
                'fence-m': 45,
                'fence-r': 46,
                'l-tree-full-tl': 59,
                'l-tree-full-tr': 60,
                'l-tree-full-ml': 72,
                'l-tree-full-mr': 73,
                'l-tree-full-bl': 85,
                'l-tree-full-br': 86,
                'r-tree-full-tl': 61,
                'r-tree-full-tr': 62,
                'r-tree-full-ml': 74,
                'r-tree-full-mr': 75,
                'r-tree-full-bl': 87,
                'r-tree-full-br': 88,
                'tree-empty-tl': 63,
                'tree-empty-tr': 64,
                'tree-empty-ml': 76,
                'tree-empty-mr': 77,
                'tree-empty-bl': 89,
                'tree-empty-br': 90,
                'turn-up-from-right': 81,
                'turn-up-from-left': 83,
                'turn-left-from-down': 57,
                'turn-right-from-down': 55
            }
        }
    })
}










function setWorld(worldState) {
    camScale(1.5)
    function makeTile(type) {
        return [
            sprite('tile'),
            {type}
        ]
    }

    const map = [
        addLevel([
            'azazazazazazazazazazazazazazazazazazazazazazazaz',
            'qsqsqsqsqsqsqsqsqsqsqsqsqsqsqsqsqsqsqsqsqsqsqsqs',
            'azazazazazazazazazazazazazazazazazazazazazazazaz',
            'qsqsqsqsqsqsqsqsqsqsqsqsqsqsqsqsqsqsqsqsqsqsqsqs',
            'azazazazazazazazazazazazazazazazazazazazazazazaz',
            'qsqsqsqsqsqsqsqsqsqsqsqsqsqsqsqsqsqsqsqsqsqsqsqs',
            'azazazazwxwxwxwxwxwxwxwxwxwxwxwxwxwxwxwxazazazaz',
            'qsqsqsqs1111111111111111rty1111111111111qsqsqsqs',
            'azazazaz1000000000000001fgh1111111111111azazazaz',
            'qsqsqsqs1000000000000001fgh1111111111111qsqsqsqs',
            'azazazaz1000000000000011fgh1110000000001azazazaz',
            'qsqsqsqs1000011111111111fgh1000000000001qsqsqsqs',
            'azazazaz100001rttttttttt3gh1000000000001azazazaz',
            'qsqsqsqs100001fgggggggggggh1000000000001qsqsqsqs',
            'azazazaz100011fgcbbbbbbbbbn1000000000001azazazaz',
            'qsqsqsqs100111fgh11111111111111111111111qsqsqsqs',
            'azazazaz111111fgh11111111111111111111111azazazaz',
            'qsqsqsqs111111fgh11111111111111111111111qsqsqsqs',
            'azazazaz111111fgdttttttttttttttttttttty1azazazaz',
            'qsqsqsqs111111fgggggggggggggggggggggggh1qsqsqsqs',
            'azazazaz111111vbbbbbbbegcbbbbbbbbbbbbbn1azazazaz',
            'qsqsqsqs10000111111111fgh111111111111111qsqsqsqs',
            'azazazaz10000000000001fgh1AZZZE111000001azazazaz',
            'qsqsqsqs10000000000001fgh1QSSSD100000001qsqsqsqs',
            'azazazaz10000000000001fgh1QSSSD100000001azazazaz',
            'qsqsqsqs10000000000001fgh1WXXXC100000001qsqsqsqs',
            'azazazaz11111111111111vbn111111111111111azazazaz',
            'qsqsqsqsqsqsqsqsqsqsqsqsqsqsqsqsqsqsqsqsqsqsqsqs',
            'azazazazazazazazazazazazazazazazazazazazazazazaz',
        ], {
            tileWidth: 32,
            tileHeight: 32,
            tiles: {
                '0': () => makeTile('tall-grass'),
                '1': () => makeTile('grass'),
                'a': () => makeTile('r-tree-full-tl'),
                'z': () => makeTile('r-tree-full-tr'),
                'q': () => makeTile('r-tree-full-ml'),
                's': () => makeTile('r-tree-full-mr'),
                'w': () => makeTile('r-tree-full-bl'),
                'x': () => makeTile('r-tree-full-br'),
                'r': () => makeTile('dirt-tl'),
                't': () => makeTile('dirt-tm'),
                'y': () => makeTile('dirt-tr'),
                'f': () => makeTile('dirt-ml'),
                'g': () => makeTile('dirt-m'),
                'h': () => makeTile('dirt-mr'),
                'v': () => makeTile('dirt-bl'),
                'b': () => makeTile('dirt-bm'),
                'n': () => makeTile('dirt-br'),
                'e': () => makeTile('turn-left-from-down'),
                'c': () => makeTile('turn-right-from-down'),
                'd': () => makeTile('turn-up-from-right'),
                '3': () => makeTile('turn-up-from-left'),
                'A': () => makeTile('water-tl'),
                'Z': () => makeTile('water-tm'),
                'E': () => makeTile('water-tr'),
                'Q': () => makeTile('water-ml'),
                'S': () => makeTile('water-m'),
                'D': () => makeTile('water-mr'),
                'W': () => makeTile('water-bl'),
                'X': () => makeTile('water-bm'),
                'C': () => makeTile('water-br'),
            }
        }),
        addLevel([
            '                                                ',
            '                                                ',
            '                                                ',
            '                                                ',
            '                                                ',
            '                                                ',
            '                                                ',
            '                                                ',
            '                                                ',
            '                                                ',
            '                                                ',
            '                                                ',
            '                                                ',
            '                                                ',
            '                                l               ',
            '                                                ',
            '                                                ',
            '                                                ',
            '                                                ',
            '                                                ',
            '                                                ',
            '                                                ',
            '                                                ',
            '                                                ',
            '                                                ',
            '                                                ',
            '        98989898989898989898989898989898        ',
            '                                                ',
            '                                                ',
        ], {
            tileWidth: 32,
            tileHeight: 32,
            tiles: {
                'l': () => [sprite('maison'),area({shape: new Rect(vec2(0, 0), 160, 100)}), body({isStatic: true})],
                '8': () => makeTile('tree-empty-tr', 100),
                '9': () => makeTile('tree-empty-tl', 100),
            },
        }),

        addLevel([
            '                                                ',
            '                                                ',
            '                                                ',
            '                                                ',
            '                                                ',
            '                                                ',
            '       pppppppppppppppppppppppppppppppppp       ',
            '       p                                p       ',
            '       p                                p       ',
            '       p                                p       ',
            '       p                                p       ',
            '       p                                p       ',
            '       p                                p       ',
            '       p                                p       ',
            '       p                                p       ',
            '       p                                p       ',
            '       p                                p       ',
            '       p                                p       ',
            '       p                                p       ',
            '       p                                p       ',
            '       p                                p       ',
            '       p                                p       ',
            '       p                  ooooo         p       ',
            '       p                  ooooo         p       ',
            '       p                  ooooo         p       ',
            '       p                  ooooo         p       ',
            '       p                                p       ',
            '       pppppppppppppppppppppppppppppppppp       ',
            '                                                ',
        ], {
            tileWidth: 32,
            tileHeight: 32,
            tiles: {
                'p': () => [
                    area({shape: new Rect(vec2(0, -25), 32, 32)}),
                    body({isStatic: true})
                ],
                'o': () => [
                    area({shape: new Rect(vec2(0, -15), 26, 32)}),
                    body({isStatic: true})
                ]
            }
        })


    ]

    for (const layer of map) {
        layer.use(scale(1))
        for (const tile of layer.children) {
            if (tile.type) {
                tile.play(tile.type)
            }
        }
    }

    add([sprite('giratina'), area(), body({isStatic: true}), pos(1050,350), scale(1), 'giratina'])
    add([sprite('arceus'), area(), body({isStatic: true}), pos(320,320), scale(1), 'arceus'])
    add([sprite('zekrom'), area(), body({isStatic: true}), pos(400,720), scale(1), 'zekrom'])
    add([sprite('kyurem'), area(), body({isStatic: true}), pos(1100,720), scale(1), 'kyurem'])

    add([ sprite('npc'), scale(1), pos(800,220), area({shape: new Rect(vec2(0, -24), 32, 48)}), body({isStatic: true}), 'npc'])


    const player = add([
        sprite('player-down'),
        pos(490,360),
        scale(1),
        area({shape: new Rect(vec2(0), 32, 32)}),
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
    })

    function setSprite(player, spriteName) {
        if (player.currentSprite !== spriteName) {
            player.use(sprite(spriteName))
            player.currentSprite = spriteName
        }
    }

    onKeyDown('down', () => {
        if (player.isInDialogue) return
        player.flipX = false
        if (player.curAnim() !== 'walk') {
            setSprite(player, 'player-down')
            player.play('walk')
        }
        player.move(0, 100)
    })

    onKeyDown('up', () => {
        if (player.isInDialogue) return
        player.flipX = false
        if (player.curAnim() !== 'walk') {
            setSprite(player, 'player-up')
            player.play('walk')
        }
        player.move(0, -100)
    })

    onKeyDown('left', () => {
        if (player.isInDialogue) return
        player.flipX = false
        if (player.curAnim() !== 'walk') {
            setSprite(player, 'player-side')
            player.play('walk')
        }
        player.move(-100, 0)

    })

    onKeyDown('right', () => {
        if (player.isInDialogue) return
        player.flipX = true
        if (player.curAnim() !== 'walk') {
            setSprite(player, 'player-side')
            player.play('walk')
        }
        player.move(100, 0)
    })

    onKeyRelease('up', () => {
        player.stop()
    })

    onKeyRelease('down', () => {
        player.stop()
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
            rect(800, 150),
            outline(5),
            pos(100, 550),
            fixed()
        ])
        const dialogue = "Il te faut battre les 4 pekomon de cet endroit pour être le champion!"
        const content = dialogueBox.add([
            text('',
                {
                    size: 30,
                    width: 700,
                    lineSpacing: 15,
                }),
            color(10,10,10),
            pos(40,30),
            fixed()
        ])

        if (worldState.faintedMons < 4) {
            content.text = dialogue
        } else {
            content.text = "TU ES LE CHAMPION !"
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



    onCollideWithPlayer('giratina', player, worldState)
    onCollideWithPlayer('arceus', player, worldState)
    onCollideWithPlayer('zekrom', player, worldState)
    onCollideWithPlayer('kyurem', player, worldState)
}

function setBattle(worldState) {
    add([
        sprite('battle-background'),
        scale(2.5),
        pos(0,0)
    ])

    add([
        sprite('battleplayerbase'),
        scale(1),
        pos(0, 500)

    ])

    const enemyMon = add([
        sprite(worldState.enemyName),
        scale(4.5),
        pos(200,50),
        opacity(1),
        {
            fainted: false
        }
    ])
    enemyMon.flipX = false

    tween(
        enemyMon.pos.x,
        750,
        0.3,
        (val) => enemyMon.pos.x = val,
        easings.easeInSine
    )

    const playerMon = add([
        sprite('rayquaza'),
        scale(6),
        pos(-60, 230),
        opacity(1),
        {
            fainted: false
        }
    ])
    playerMon.flipX = true

    tween(
        playerMon.pos.x,
        110,
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
        text('RAYQUAZA', {size: 32}),
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

    tween(playerMonHealthBox.pos.x, 750, 0.3, (val) => playerMonHealthBox.pos.x = val, easings.easeInSine)

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
        rect(978, 100),
        outline(4),
        pos(0, 618)
    ])

    const content = box.add([
        text('RAYQUAZA is ready to battle!', { size: 30}),
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
                content.text = "COUP CRITIQUE!"
            }

            reduceHealth(playerMonHealthBar, damageDealt)
            makeMonFlash(playerMon)

            phase = 'player-selection'
            return
        }

        if (phase === 'player-turn') {
            const damageDealt = Math.random() * 230

            if (damageDealt > 150) {
                content.text = "COUP CRITIQUE!"
            } else {
                content.text = 'RAYQUAZA utilise charge.'
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
            content.text = worldState.enemyName.toUpperCase() + ' est K.O!'
            enemyMon.fainted = true
            setTimeout(() => {
                content.text = 'RAYQUAZA a gagné !'
            }, 1000)
            setTimeout(() => {
                worldState.faintedMons.push(worldState.enemyName)
                go('world', worldState)
            }, 2000)
        }

        if (playerMonHealthBar.width < 0 && !playerMon.fainted) {
            makeMonDrop(playerMon)
            content.text = 'RAYQUAZA est K.O!'
            playerMon.fainted = true
            setTimeout(() => {
                content.text = 'Vous foncez pour aller soigner RAYQUAZA!'
            }, 1000)
            setTimeout(() => {
                worldState.playerPos = vec2(800,250)
                go('world', worldState)
            }, 2000)
        }
    })
}












