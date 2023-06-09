import kaboom from "kaboom";

kaboom({
    scale: 1
});

setBackground(Color.fromHex('#000000'))

loadAssets()

scene('world', (worldState)=> setWorld(worldState))
scene('battle', (worldState)=> setBattle(worldState))

go('world')






function loadAssets(){
    loadSprite('maison', "./img/maison.png")
    loadSprite('zekromwild', './img/zekromwild.png')
    loadSprite('zekrom', './img/zekrom.png')
    loadSprite('zekrom shiny', './img/zekromshiny.png')
    loadSprite('arceuswild', './img/arceuswild.png')
    loadSprite('arceus', './img/arceus.png')
    loadSprite('arceus shiny', './img/arceusshiny.png')
    loadSprite('kyuremwild', './img/kyuremwild.png')
    loadSprite('kyurem', './img/kyurem.png')
    loadSprite('kyurem shiny', './img/kyuremshiny.png')
    loadSprite('giratinawild', './img/giratinawild.png')
    loadSprite('giratina', './img/giratina.png')
    loadSprite('giratina shiny', './img/giratinashiny.png')
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
                'grassv2': 39,
                'grassv3': 40,
                'grassv4': 41,
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
                'turn-right-from-down': 55,
                'flower': 26,
                'bush': 27,
                'pokeball': 14
            }
        },
        'top-tree-left' : {x: 352, y: 128, width: 32, height: 32},
        'top-tree-right' : {x: 384, y: 128, width: 32, height:32},
        'sign': {x: 0, y: 32, width: 32, height: 32},
        'pokeball': {x: 32, y: 32, width: 32, height: 32},
    })
}










function setWorld(worldState) {
    camScale(3)
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
            'qsqsqsqs3422314324314324rty1243241114324qsqsqsqs',
            'azazazaz3000000000000001fgh4123423231412azazazaz',
            'qsqsqsqs1000000000000003fgh3423214423142qsqsqsqs',
            'azazazaz4000000000000024fgh1420000000001azazazaz',
            'qsqsqsqs4000023421432132fgh2000000000001qsqsqsqs',
            'azazazaz100003rttttttttt<gh4000000000004azazazaz',
            'qsqsqsqs200001fgggggggggggh1000000000002qsqsqsqs',
            'azazazaz300043fgcbbbbbbbbbn2000000000003azazazaz',
            'qsqsqsqs132423fgh21432431424321324332323qsqsqsqs',
            'azazazaz412314fgh14213423113214344213213azazazaz',
            'qsqsqsqs124214fgh12432312223144212134343qsqsqsqs',
            'azazazaz334113fgdttttttttttttttttttttty1azazazaz',
            'qsqsqsqs231241fgggggggggggggggggggggggh1qsqsqsqs',
            'azazazaz423122vbbbbbbbegcbbbbbbbbbbbbbn1azazazaz',
            'qsqsqsqs10000114231431fgh423132142314231qsqsqsqs',
            'azazazaz30000000000002fgh3AZZZE142000001azazazaz',
            'qsqsqsqs10000000000001fgh2QSSSD400000002qsqsqsqs',
            'azazazaz10000000000004fgh3QSSSD200000003azazazaz',
            'qsqsqsqs40000000000001fgh4WXXXC300000001qsqsqsqs',
            'azazazaz23111411132111vbn132432421314231azazazaz',
            'qsqsqsqsqsqsqsqsqsqsqsqsqsqsqsqsqsqsqsqsqsqsqsqs',
            'azazazazazazazazazazazazazazazazazazazazazazazaz',
        ], {
            tileWidth: 32,
            tileHeight: 32,
            tiles: {
                '0': () => makeTile('tall-grass'),
                '1': () => makeTile('grass'),
                '2': () => makeTile('grassv2'),
                '3': () => makeTile('grassv3'),
                '4': () => makeTile('grassv4'),
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
                '<': () => makeTile('turn-up-from-left'),
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
            '        BBBBB     KLLLLLLM                      ',
            '        B         FFFFFFFFFFFFF                 ',
            '        B BBB     KLLLLLLLLLLLLM     KLM        ',
            '        B   B                                   ',
            '        BBBBB                                   ',
            '                                                ',
            '                                                ',
            '                                                ',
            '                                                ',
            '                                                ',
            '                                                ',
            '                                                ',
            '                                                ',
            '                                                ',
        ], {
            tileWidth: 32,
            tileHeight: 32,
            tiles: {
                'l': () => [sprite('maison'),area({shape: new Rect(vec2(0, 0), 160, 100)}), body({isStatic: true})],
                'K': () => makeTile('fence-l'),
                'L': () => makeTile('fence-m'),
                'M': () => makeTile('fence-r'),
                'F': () => makeTile('flower'),
                'B': () => makeTile('bush'),
                'P': () => makeTile('pokeball'),
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
            '       psssss     ssssssss              p       ',
            '       ps                               p       ',
            '       ps sss     ssssssssssssss     sssp       ',
            '       ps   s                           p       ',
            '       psssss                           p       ',
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
                ],
                's': () => [
                    area({shape: new Rect(vec2(0, -17), 32, 22)}),
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
    const shinyRandom = Math.floor(Math.random() * 10)

    let arceusRand
    let kyuremRand
    let zekromRand
    let giratinaRand
    if (shinyRandom === 6){
        arceusRand = 'arceus shiny'
        kyuremRand = 'kyurem shiny'
        zekromRand = 'zekrom shiny'
        giratinaRand = 'giratina shiny'
    }else{
        arceusRand = 'arceus'
        kyuremRand = 'kyurem'
        zekromRand = 'zekrom'
        giratinaRand = 'giratina'
    }
    add([sprite('giratinawild'), area(), body({isStatic: true}), pos(1050,350), scale(1), giratinaRand])
    add([sprite('arceuswild'), area(), body({isStatic: true}), pos(320,320), scale(1), arceusRand])
    add([sprite('zekromwild'), area(), body({isStatic: true}), pos(400,720), scale(1), zekromRand])
    add([sprite('kyuremwild'), area(), body({isStatic: true}), pos(1100,720), scale(1), kyuremRand])
    let Xlefttrees = 255
    for (let i = 0; i < 16; i++) {
        add([sprite('top-tree-left'), pos(Xlefttrees, 832), scale(1), z(10)])
        Xlefttrees = Xlefttrees + 64
    }
    let Xrighttrees = 287
    for (let i = 0; i < 16; i++) {
        add([sprite('top-tree-right'), pos(Xrighttrees, 832), scale(1), z(10)])
        Xrighttrees = Xrighttrees + 64
    }

    add([ sprite('npc'), scale(1), pos(800,220), area({shape: new Rect(vec2(0, -24), 32, 48)}), body({isStatic: true}), 'npc'])
    add([ sprite('sign'), scale(1), pos(800,730), area({shape: new Rect(vec2(0, -14), 32, 32)}), body({isStatic: true}), 'sign'])
    add([ sprite('pokeball'), scale(1), pos(352,576), area({shape: new Rect(vec2(0), 32, 32)}), body({isStatic: true}), 'pokeball'])


    const player = add([
        sprite('player-down'),
        pos(737,770),
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

    player.onCollide('sign', ()=>{
        player.isInDialogue = true
        const dialogueBoxFixedContainerSign1 = add([fixed(), z(100)])
        const dialogueBoxSign1 = dialogueBoxFixedContainerSign1.add([
            rect(1300, 150),
            outline(4),
            pos(300, 800),
            fixed()
        ])
        dialogueBoxSign1.add([
            text('Bienvenue sur pekomon! Utiliser espace pour attaquer ou pour quitter une conversation',
                {
                    size: 42,
                    width: 1200,
                    lineSpacing: 15,
                }),
            color(10,10,10),
            pos(50,30),
            fixed()
        ])

        onUpdate(() => {
            if (isKeyDown('space')) {
                destroy(dialogueBoxSign1)
                player.isInDialogue = false
            }
        })
    })
    player.onCollide('pokeball', ()=>{
        player.isInDialogue = true
        const dialogueBoxFixedContainerSign1 = add([fixed(), z(100)])
        const dialogueBoxSign1 = dialogueBoxFixedContainerSign1.add([
            rect(1300, 150),
            outline(4),
            pos(300, 800),
            fixed()
        ])
        dialogueBoxSign1.add([
            text("C'est une pokeball! Pour savoir ce qu'il faut faire allez voir le professeur en haut de la route",
                {
                    size: 35,
                    width: 1200,
                    lineSpacing: 15,
                }),
            color(10,10,10),
            pos(50,30),
            fixed()
        ])

        onUpdate(() => {
            if (isKeyDown('space')) {
                destroy(dialogueBoxSign1)
                player.isInDialogue = false
            }
        })
    })

    player.onCollide('npc', () => {
        player.isInDialogue = true
        const dialogueBoxFixedContainer = add([fixed()])
        const dialogueBox = dialogueBoxFixedContainer.add([
            rect(1000, 150),
            outline(4),
            pos(450, 800),
            fixed()
        ])
        const dialogue = "Il te faut battre les 4 pekomon de cet endroit pour être le champion!"
        const content = dialogueBox.add([
            text('',
                {
                    size: 42,
                    width: 900,
                    lineSpacing: 15,
                }),
            color(10,10,10),
            pos(50,30),
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
        const flash = add([rect(5000, 5000), color(10,10,10), fixed(), opacity(0), z(50)])
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



    onCollideWithPlayer(giratinaRand, player, worldState)
    onCollideWithPlayer(arceusRand, player, worldState)
    onCollideWithPlayer(zekromRand, player, worldState)
    onCollideWithPlayer(kyuremRand, player, worldState)
}


function setBattle(worldState) {
    add([
        sprite('battle-background'),
        scale(4),
        pos(0,0)
    ])

    add([
        sprite('battleplayerbase'),
        scale(1.5),
        pos(80, 645)

    ])
    add([
        sprite('battleenemybase'),
        scale(1.5),
        pos(1270, 250)

    ])

    let myX = 1320
    let myY = 50
    let myScale = 2
    if (worldState.enemyName === 'zekrom' || 'zekrom shiny'){
        myScale = 1.8
        myX = 1300
        myY = 40
    }else if (worldState.enemyName === 'kyurem' || 'kyurem shiny'){
        myX = 1240
        myY = 60
    }else if (worldState.enemyName === 'giratina' || 'giratina shiny'){
        myX = 1300
    }
    const enemyMon = add([
        sprite(worldState.enemyName),
        scale(myScale),

        pos(200,myY),
        opacity(1),
        {
            fainted: false
        }
    ])

    enemyMon.flipX = false

    tween(
        enemyMon.pos.x,
        myX,
        0.3,
        (val) => enemyMon.pos.x = val,
        easings.easeInSine
    )

    const playerMon = add([
        sprite('rayquaza'),
        scale(2),
        pos(100, 420),
        opacity(1),
        {
            fainted: false
        }
    ])
    playerMon.flipX = false

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
        pos(1000, 600)
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

    tween(playerMonHealthBox.pos.x, 1000, 0.3, (val) => playerMonHealthBox.pos.x = val, easings.easeInSine)

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

    tween(enemyMonHealthBox.pos.x, 500, 0.3, (val) => enemyMonHealthBox.pos.x = val, easings.easeInSine)

    const box = add([
        rect(1903, 250),
        outline(4),
        pos(0, 740)
    ])

    const content = box.add([
        text('RAYQUAZA est prêt à se battre!', { size: 42}),
        color(10,10,10),
        pos(50,110)
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
            content.text = '> Charge'
            phase = 'player-turn'
            return
        }

        if (phase === 'enemy-turn') {
            content.text = worldState.enemyName.toUpperCase() + ' attaque!'
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












