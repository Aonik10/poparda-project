export interface BannedChampion {
    championId: number;
    teamId: number;
    pickTurn: number;
}

export interface Summoner {
    id: string;
    accountId: string;
    puuid: string;
    name: string;
    profileIconId: number;
    revisionDate: number;
    summonerLevel: number;
}

export interface Player {
    teamId: number;
    spell1Id: number;
    spell2Id: number;
    championId: number;
    profileIconId: number;
    summonerName: string;
    bot: false;
    summonerId: string;
    gameCustomizationObjects: any[];
    perks: {
        perkIds: number[];
        perkStyle: number;
        perkSubStyle: number;
    };
}

export interface Champion {
    version: string;
    id: string;
    key: string;
    name: string;
    title: string;
    blurb: string;
    info: {
        attack: number;
        defense: number;
        magic: number;
        difficulty: number;
    };
    image: {
        full: string;
        sprite: string;
        group: string;
        x: number;
        y: number;
        w: number;
        h: number;
    };
    tags: string[];
    partype: string;
    stats: {
        hp: number;
        hpperlevel: number;
        mp: number;
        mpperlevel: number;
        movespeed: number;
        armor: number;
        armorperlevel: number;
        spellblock: number;
        spellblockperlevel: number;
        attackrange: number;
        hpregen: number;
        hpregenperlevel: number;
        mpregen: number;
        mpregenperlevel: number;
        crit: number;
        critperlevel: number;
        attackdamage: number;
        attackdamageperlevel: number;
        attackspeedperlevel: number;
        attackspeed: number;
    };
}

export interface CurrentGame {
    gameId: number;
    mapId: number;
    gameMode: string;
    gameType: string;
    gameQueueConfigId: number;
    participants: Player[];
    observers: { encryptionKey: string };
    platformId: string;
    bannedChampions: BannedChampion[];
    gameStartTime: number;
    gameLength: number;
}

export interface SummonerSpell {
    id: string;
    name: string;
    description: string;
    tooltip: string;
    maxrank: number;
    cooldown: [number];
    cooldownBurn: string;
    cost: [number];
    costBurn: string;
    datavalues: {};
    effect: any[];
    effectBurn: any[];
    vars: any[];
    key: string;
    summonerLevel: number;
    modes: string[];
    costType: string;
    maxammo: string;
    range: [number];
    rangeBurn: string;
    image: {
        full: string;
        sprite: string;
        group: string;
        x: number;
        y: number;
        w: number;
        h: number;
    };
    resource: string;
}

export interface SummonerSpells {
    type: string;
    version: string;
    data: {
        [key: string]: SummonerSpell;
    };
}

export interface ChampionResponse {
    type: string;
    format: string;
    version: string;
    data: {
        [key: string]: Champion;
    };
}

export interface FeaturedGames {
    gameList: CurrentGame[];
    clientRefreshInterval: number;
}

export interface Match {
    metadata: {
        dataVersion: string;
        matchId: string;
        participants: string[];
    };
    info: {
        gameCreation: number;
        gameDuration: number;
        gameEndTimestamp: number;
        gameId: number;
        gameMode: string;
        gameName: string;
        gameStartTimestamp: number;
        gameType: string;
        gameVersion: string;
        mapId: number;
        participants: {
            allInPings: number;
            assistMePings: number;
            assists: number; // usefull
            baitPings: number;
            baronKills: number;
            basicPings: number;
            bountyLevel: number;
            challenges: {
                "12AssistStreakCount": number;
                abilityUses: number;
                acesBefore15Minutes: number;
                alliedJungleMonsterKills: number;
                baronTakedowns: number;
                blastConeOppositeOpponentCount: number;
                bountyGold: number;
                buffsStolen: number;
                completeSupportQuestInTime: number;
                controlWardsPlaced: number;
                damagePerMinute: number;
                damageTakenOnTeamPercentage: number;
                dancedWithRiftHerald: number;
                deathsByEnemyChamps: number;
                dodgeSkillShotsSmallWindow: number;
                doubleAces: number;
                dragonTakedowns: number;
                earlyLaningPhaseGoldExpAdvantage: number;
                effectiveHealAndShielding: number;
                elderDragonKillsWithOpposingSoul: number;
                elderDragonMultikills: number;
                enemyChampionImmobilizations: number;
                enemyJungleMonsterKills: number;
                epicMonsterKillsNearEnemyJungler: number;
                epicMonsterKillsWithin30SecondsOfSpawn: number;
                epicMonsterSteals: number;
                epicMonsterStolenWithoutSmite: number;
                firstTurretKilled: number;
                flawlessAces: number;
                fullTeamTakedown: number;
                gameLength: number;
                getTakedownsInAllLanesEarlyJungleAsLaner: number;
                goldPerMinute: number;
                hadOpenNexus: number;
                highestCrowdControlScore: number;
                immobilizeAndKillWithAlly: number;
                initialBuffCount: number;
                initialCrabCount: number;
                jungleCsBefore10Minutes: number;
                junglerTakedownsNearDamagedEpicMonster: number;
                kTurretsDestroyedBeforePlatesFall: number;
                kda: number;
                killAfterHiddenWithAlly: number;
                killParticipation: number;
                killedChampTookFullTeamDamageSurvived: number;
                killingSprees: number;
                killsNearEnemyTurret: number;
                killsOnOtherLanesEarlyJungleAsLaner: number;
                killsOnRecentlyHealedByAramPack: number;
                killsUnderOwnTurret: number;
                killsWithHelpFromEpicMonster: number;
                knockEnemyIntoTeamAndKill: number;
                landSkillShotsEarlyGame: number;
                laneMinionsFirst10Minutes: number;
                laningPhaseGoldExpAdvantage: number;
                legendaryCount: number;
                lostAnInhibitor: number;
                maxCsAdvantageOnLaneOpponent: number;
                maxKillDeficit: number;
                maxLevelLeadLaneOpponent: number;
                mejaisFullStackInTime: number;
                moreEnemyJungleThanOpponent: number;
                multiKillOneSpell: number;
                multiTurretRiftHeraldCount: number;
                multikills: number;
                multikillsAfterAggressiveFlash: number;
                mythicItemUsed: number;
                outerTurretExecutesBefore10Minutes: number;
                outnumberedKills: number;
                outnumberedNexusKill: number;
                perfectDragonSoulsTaken: number;
                perfectGame: number;
                pickKillWithAlly: number;
                playedChampSelectPosition: number;
                poroExplosions: number;
                quickCleanse: number;
                quickFirstTurret: number;
                quickSoloKills: number;
                riftHeraldTakedowns: number;
                saveAllyFromDeath: number;
                scuttleCrabKills: number;
                skillshotsDodged: number;
                skillshotsHit: number;
                snowballsHit: number;
                soloBaronKills: number;
                soloKills: number;
                stealthWardsPlaced: number;
                survivedSingleDigitHpCount: number;
                survivedThreeImmobilizesInFight: number;
                takedownOnFirstTurret: number;
                takedowns: number;
                takedownsAfterGainingLevelAdvantage: number;
                takedownsBeforeJungleMinionSpawn: number;
                takedownsFirstXMinutes: number;
                takedownsInAlcove: number;
                takedownsInEnemyFountain: number;
                teamBaronKills: number;
                teamDamagePercentage: number;
                teamElderDragonKills: number;
                teamRiftHeraldKills: number;
                tookLargeDamageSurvived: number;
                turretPlatesTaken: number;
                turretTakedowns: number;
                turretsTakenWithRiftHerald: number;
                twentyMinionsIn3SecondsCount: number;
                twoWardsOneSweeperCount: number;
                unseenRecalls: number;
                visionScoreAdvantageLaneOpponent: number;
                visionScorePerMinute: number;
                wardTakedowns: number;
                wardTakedownsBefore20M: number;
                wardsGuarded: number;
            };
            champExperience: number;
            champLevel: number;
            championId: number; // useful
            championName: string;
            championTransform: number;
            commandPings: number;
            consumablesPurchased: number;
            damageDealtToBuildings: number;
            damageDealtToObjectives: number;
            damageDealtToTurrets: number;
            damageSelfMitigated: number;
            dangerPings: number;
            deaths: number; // useful
            detectorWardsPlaced: number;
            doubleKills: number;
            dragonKills: number;
            eligibleForProgression: boolean;
            enemyMissingPings: number;
            enemyVisionPings: number;
            firstBloodAssist: boolean;
            firstBloodKill: boolean;
            firstTowerAssist: boolean;
            firstTowerKill: boolean;
            gameEndedInEarlySurrender: boolean;
            gameEndedInSurrender: boolean;
            getBackPings: number;
            goldEarned: number;
            goldSpent: number;
            holdPings: number;
            individualPosition: string;
            inhibitorKills: number;
            inhibitorTakedowns: number;
            inhibitorsLost: number;
            item0: number; //useful (build)
            item1: number;
            item2: number;
            item3: number;
            item4: number;
            item5: number;
            item6: number;
            itemsPurchased: number;
            killingSprees: number;
            kills: number; // useful
            lane: string;
            largestCriticalStrike: number;
            largestKillingSpree: number;
            largestMultiKill: number;
            longestTimeSpentLiving: number;
            magicDamageDealt: number;
            magicDamageDealtToChampions: number;
            magicDamageTaken: number;
            needVisionPings: number;
            neutralMinionsKilled: number;
            nexusKills: number;
            nexusLost: number;
            nexusTakedowns: number;
            objectivesStolen: number;
            objectivesStolenAssists: number;
            onMyWayPings: number;
            participantId: number; // useful
            pentaKills: number;
            perks: {
                statPerks: {
                    defense: number;
                    flex: number;
                    offense: number;
                };
                styles: {
                    description: string;
                    selections: {
                        perk: number;
                        var1: number;
                        var2: number;
                        var3: number;
                    }[];
                    style: number;
                }[];
            };
            physicalDamageDealt: number;
            physicalDamageDealtToChampions: number;
            physicalDamageTaken: number;
            profileIcon: number;
            pushPings: number;
            puuid: string; // useful
            quadraKills: number;
            riotIdName: string;
            riotIdTagline: string;
            role: string;
            sightWardsBoughtInGame: number;
            spell1Casts: number;
            spell2Casts: number;
            spell3Casts: number;
            spell4Casts: number;
            summoner1Casts: number;
            summoner1Id: number;
            summoner2Casts: number;
            summoner2Id: number;
            summonerId: string; // useful
            summonerLevel: number;
            summonerName: string; // useful
            teamEarlySurrendered: boolean;
            teamId: number;
            teamPosition: string;
            timeCCingOthers: number;
            timePlayed: number;
            totalAllyJungleMinionsKilled: number;
            totalDamageDealt: number;
            totalDamageDealtToChampions: number;
            totalDamageShieldedOnTeammates: number;
            totalDamageTaken: number;
            totalEnemyJungleMinionsKilled: number;
            totalHeal: number;
            totalHealsOnTeammates: number;
            totalMinionsKilled: number;
            totalTimeCCDealt: number;
            totalTimeSpentDead: number;
            totalUnitsHealed: number;
            tripleKills: number;
            trueDamageDealt: number;
            trueDamageDealtToChampions: number;
            trueDamageTaken: number;
            turretKills: number;
            turretTakedowns: number;
            turretsLost: number;
            unrealKills: number;
            visionClearedPings: number;
            visionScore: number;
            visionWardsBoughtInGame: number;
            wardsKilled: number;
            wardsPlaced: number;
            win: boolean;
        }[];
        platformId: string; // usefull (is the region code e.g. "LA2")
        queueId: number;
        teams: {
            bans: {
                championId: number;
                pickTurn: number;
            }[];
            objectives: {
                baron: Objective;
                champion: Objective;
                dragon: Objective;
                inhibitor: Objective;
                riftHerald: Objective;
                tower: Objective;
            };
            teamId: number;
            win: boolean;
        }[];
        tournamentCode: string;
    };
}

interface Objective {
    first: boolean;
    kills: number;
}
