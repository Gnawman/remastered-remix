// ==EMEVD==
// @docs    ds1-common.emedf.json
// @compress    DCX_DFLT_10000_24_9
// @game    DarkSouls1
// @string    
// @linked    []
// @version    3.4.1
// ==/EMEVD==

// コンストラクタ
$Event(0, Default, function() {
    RegisterBonfire(11810992, 1811960, 1, 180, 0);
    RegisterBonfire(11810984, 1811961, 1, 180, 0);
    RegisterLadder(11810010, 11810011, 1811140);
    ActivateHit(1813121, Disabled);
    SetEventFlag(11810315, OFF);
    SetEventFlag(11810112, OFF);
    SetObjactState(1811100, -1, Disabled);
    SetObjactState(1811101, -1, Disabled);
    SetObjactState(1811102, -1, Disabled);
    if (PlayerInMap(18, 1)) {
        if (!EventFlag(11810002)) {
            PlayCutsceneAndWarpPlayer(180101, CutscenePlayMode.SkippableWithFadeOut, 1812011, 18, 1, 10000);
            SetEventFlag(11810002, ON);
            SetPlayerRespawnPoint(1812900);
        }
    }
    InitializeEvent(0, 11810090, 1811700, 1811701, 1812600, 1812601);
    InitializeEvent(0, 11810000, 0);
    InitializeEvent(0, 11810150, 0);
    InitializeEvent(0, 11810211, 0);
    InitializeEvent(1, 11810200, 1811210, 1811211, 1811212);
    InitializeEvent(0, 11810310, 0);
    InitializeEvent(0, 11810311, 0);
    InitializeEvent(0, 11810312, 0);
    InitializeEvent(0, 11810313, 0);
    InitializeEvent(0, 11810120, 0);
    InitializeEvent(0, 11810110, 0);
    InitializeEvent(0, 11810111, 0);
    InitializeEvent(0, 11810450, 0);
    InitializeEvent(0, 11810320, 0);
    InitializeEvent(0, 11810300, 0);
    InitializeEvent(0, 11810850, 1810200, 27907000);
    InitializeEvent(1, 11810850, 1810213, 27907000);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        InitializeEvent(0, 11810641, 3, 111, 11810601, 51810800);
        InitializeEvent(1, 11810641, 3, 270, 11810602, 51810810);
        InitializeEvent(2, 11810641, 3, 271, 11810603, 51810820);
        InitializeEvent(3, 11810641, 3, 272, 11810604, 51810830);
        InitializeEvent(4, 11810641, 3, 275, 11810605, 51810840);
        InitializeEvent(5, 11810641, 3, 293, 11810606, 51810850);
        InitializeEvent(6, 11810641, 3, 350, 11810607, 51810860);
        InitializeEvent(7, 11810641, 3, 500, 11810607, 51810860);
        InitializeEvent(8, 11810641, 3, 370, 11810608, 51810870);
        InitializeEvent(9, 11810641, 3, 375, 11810609, 51810880);
        InitializeEvent(10, 11810641, 3, 376, 11810610, 51810890);
        InitializeEvent(11, 11810641, 3, 380, 11810611, 51810900);
        InitializeEvent(12, 11810641, 3, 385, 11810612, 51810910);
        InitializeEvent(13, 11810641, 3, 501, 11810613, 51810920);
        InitializeEvent(14, 11810641, 0, 1330000, 11810614, 51810930);
        InitializeEvent(15, 11810641, 0, 1332000, 11810615, 51810940);
        InitializeEvent(16, 11810641, 0, 1396000, 11810616, 51810950);
        InitializeEvent(17, 11810641, 1, 190000, 11810617, 51810960);
        InitializeEvent(18, 11810641, 1, 290000, 11810618, 51810970);
        InitializeEvent(19, 11810641, 1, 560000, 11810619, 51810980);
        InitializeEvent(20, 11810641, 2, 130, 11810620, 51810990);
        InitializeEvent(21, 11810641, 3, 711, 11810621, 51811000);
        InitializeEvent(0, 11810600, 0);
        InitializeEvent(0, 11815110, 11810601, 3000, 51810800);
        InitializeEvent(1, 11815110, 11810602, 3010, 51810810);
        InitializeEvent(2, 11815110, 11810603, 3020, 51810820);
        InitializeEvent(3, 11815110, 11810604, 3030, 51810830);
        InitializeEvent(4, 11815110, 11810605, 3040, 51810840);
        InitializeEvent(5, 11815110, 11810606, 3050, 51810850);
        InitializeEvent(6, 11815110, 11810607, 3060, 51810860);
        InitializeEvent(7, 11815110, 11810608, 3070, 51810870);
        InitializeEvent(8, 11815110, 11810609, 3080, 51810880);
        InitializeEvent(9, 11815110, 11810610, 3090, 51810890);
        InitializeEvent(10, 11815110, 11810611, 3100, 51810900);
        InitializeEvent(11, 11815110, 11810612, 3110, 51810910);
        InitializeEvent(12, 11815110, 11810613, 3120, 51810920);
        InitializeEvent(13, 11815110, 11810614, 3130, 51810930);
        InitializeEvent(14, 11815110, 11810615, 3140, 51810940);
        InitializeEvent(15, 11815110, 11810616, 3150, 51810950);
        InitializeEvent(16, 11815110, 11810617, 3160, 51810960);
        InitializeEvent(17, 11815110, 11810618, 3170, 51810970);
        InitializeEvent(18, 11815110, 11810619, 3180, 51810980);
        InitializeEvent(19, 11815110, 11810620, 3190, 51810990);
        InitializeEvent(20, 11815110, 11810621, 3200, 51811000);
    }
    InitializeEvent(0, 11810100, 11810100, 1811100, 10010869);
    InitializeEvent(1, 11810100, 11810101, 1811101, 10010869);
    InitializeEvent(2, 11810100, 11810102, 1811102, 10010869);
    InitializeEvent(3, 11810100, 11810103, 1811103, 10010869);
    InitializeEvent(4, 11810100, 11810104, 1811104, 10010875);
    InitializeEvent(5, 11810100, 11810105, 1811105, 0);
    InitializeEvent(6, 11810100, 11810106, 1811106, 10010871);
    InitializeEvent(0, 11815150, 0);
    InitializeEvent(0, 11810400, 0, 1811601, 1811602, 1811602, 0);
    InitializeEvent(1, 11810400, 1, 1811603, 1811604, 1811604, 0);
    InitializeEvent(2, 11810400, 2, 1811605, 1811606, 1811606, 0);
    InitializeEvent(3, 11810400, 3, 1811607, 1811608, 1811608, 0);
    InitializeEvent(4, 11810400, 4, 1811609, 1811610, 1811610, 0);
    InitializeEvent(5, 11810400, 5, 1811611, 1811612, 1811613, 65536);
    InitializeEvent(6, 11810400, 6, 1811614, 1811615, 1811616, 1);
    InitializeEvent(7, 11810400, 7, 1811617, 1811618, 1811619, 256);
    InitializeEvent(8, 11810400, 8, 1811620, 1811621, 1811622, 16777216);
    InitializeEvent(9, 11810400, 9, 1811623, 1811624, 1811624, 0);
    SetMapSoundState(1813800, Disabled);
    if (!EventFlag(11810312)) {
        SetEventFlag(11810310, OFF);
        SetEventFlag(11810314, OFF);
    }
    if (EventFlag(61810105)) {
        SetObjactState(1811111, -1, Disabled);
    }
    if (EventFlag(16)) {
        InitializeEvent(0, 11815392, 0);
        DeactivateObject(1811990, Disabled);
        DeleteMapSFX(1811991, false);
        ReproduceObjectAnimation(1811115, 1);
        ReproduceObjectAnimation(1811111, 1);
        SetObjactState(1811111, -1, Disabled);
    } else {
        InitializeEvent(0, 11815390, 0);
        InitializeEvent(0, 11815393, 0);
        InitializeEvent(0, 11815392, 0);
        InitializeEvent(0, 11810001, 0);
        InitializeEvent(0, 11815394, 0);
        InitializeEvent(0, 11815395, 0);
    }
    DeactivateObject(1811890, Disabled);
    DeleteMapSFX(1811891, false);
    SetMapSoundState(1813801, Disabled);
    EndIf(!EventFlag(11810000));
    if (EventFlag(11810900)) {
        InitializeEvent(0, 11815382, 0);
    } else {
        InitializeEvent(0, 11815382, 0);
        InitializeEvent(0, 11810900, 0);
        InitializeEvent(0, 11815384, 0);
        InitializeEvent(0, 11815385, 0);
    }
});

// プリコンストラクタ
$Event(50, Default, function() {
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        if (!EventFlag(705)) {
            if (GameCycle() >= 1) {
                SetEventFlag(705, ON);
                SetEventFlag(50000082, ON);
                SetPlayerRespawnPoint(1812900);
                SetEventFlag(11807200, OFF);
                SetEventFlag(11807210, OFF);
                SetEventFlag(11807220, OFF);
                SetEventFlag(11807240, OFF);
                InitializeEvent(0, 11810050, 0);
            }
        }
    }
    InitializeEvent(0, 11810350, 0);
    InitializeEvent(0, 11810220, 0);
    RegisterNPCHumanityEventValue(6023, 8326);
    if (!EventFlag(1061)) {
        ChangeCharacterEnableState(6024, Disabled);
    }
    SetCharacterTeamType(6024, TeamType.HostileAlly);
    InitializeEvent(0, 11810520, 6023, 1060, 1074, 1073);
    InitializeEvent(0, 11810530, 6023);
    InitializeEvent(0, 11810531, 6024, 1060, 1074, 1061);
    InitializeEvent(0, 11810532, 6024, 1060, 1074, 1062);
    InitializeEvent(0, 11815010, 0);
});

// チュートリアル チェックポイント通過XX
$Event(11810090, Default, function(X0_4, X4_4, X8_4, X12_4) {
    if (ThisEventSlot()) {
        DeactivateObject(X0_4, Disabled);
        DeleteMapSFX(X4_4, false);
        EndEvent();
    }
    act = ActionButtonLineSegment(TargetEntityType.Area, X8_4, 0, -1, 0, 10010403, ReactionType.HollowHuman, 0, X0_4);
    act2 = ActionButtonLineSegment(TargetEntityType.Area, X12_4, 0, -1, 0, 10010407, ReactionType.HollowHuman, 0, X0_4);
    WaitFor(act || act2);
    if (!act2.Passed) {
        IssueShortWarpRequest(10000, TargetEntityType.Area, X8_4, -1);
    } else {
        IssueShortWarpRequest(10000, TargetEntityType.Area, X12_4, -1);
    }
    ForceAnimationPlayback(10000, 7410, false, false, false);
    DeactivateObject(X0_4, Disabled);
    DeleteMapSFX(X4_4, true);
});

// チュートリアル 黒傾向制御
$Event(11815090, Restart, function() {
    ChangeCharacterEnableState(1810900, Disabled);
    WaitFor(EventFlag(11810000));
    WaitFor(WorldTendency(TendencyType.BlackTendency) > 50 || EventFlag(11815090));
    SetEventFlag(11815090, ON);
    ChangeCharacterEnableState(1810900, Enabled);
    WaitFor(WorldTendency(TendencyType.BlackTendency) <= 50);
    ForceCharacterDeath(1810900, false);
});

// host enters tutorial boss room
$Event(11815390, Default, function() {
    WaitFor(
        !EventFlag(16)
            && ActionButtonLineSegment(TargetEntityType.Area, 1812998, 0, -1, 0, 10010403, ReactionType.HollowHuman, 0, 1811990));
    IssueShortWarpRequest(1810800, TargetEntityType.Area, 1812301, -1);
    RotateCharacter(10000, 1812997);
    ForceAnimationPlayback(10000, 7410, false, false, false);
    SetVisibilityOfMessage(1813210, Disabled);
    ForceAnimationPlayback(1811115, 3, false, false, false);
    if (EventFlag(11810112)) {
        ForceAnimationPlayback(1811111, 3, false, false, false);
    }
    RestartEvent();
});

// host completes entrance to tutorial boss room
$Event(11815393, Default, function() {
    if (!ThisEvent()) {
        WaitFor(!EventFlag(16) && (InArea(10000, 1812996) || InArea(10000, 1812350)));
    }
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        IssueBossRoomEntryNotification(0);
    }
    ActivateMultiplayerdependantBuffs(1810800);
});

// tutorial boss starts moving
$Event(11815392, Restart, function() {
    if (EventFlag(16)) {
        ChangeCharacterEnableState(1810800, Disabled);
        ForceCharacterDeath(1810800, false);
        EndEvent();
    }
    WaitFor(
        (!EventFlag(11810310) && InArea(10000, 1812996))
            || (EventFlag(11810310) && InArea(10000, 1812990))
            || EventFlag(11815393));
    SetCharacterAIState(1810800, Enabled);
});

// tutorial boss defeat
$Event(11810001, Default, function() {
    WaitFor(HPRatio(1810800) <= 0);
    PlaySE(1810800, SoundType.sSFX, 777777777);
    WaitFor(CharacterDead(1810800));
    SetEventFlag(16, ON);
    HandleBossDefeat(1810800);
    DeactivateObject(1811990, Disabled);
    DeleteMapSFX(1811991, true);
    ForceAnimationPlayback(1811111, 1, false, false, false);
    if (EventFlag(11810312)) {
        ForceAnimationPlayback(1811115, 1, false, false, false);
    }
    SetObjactState(1811111, -1, Disabled);
});

// tutorial boss BGM ON
$Event(11815394, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(!EventFlag(11815396));
    WaitFor(
        !EventFlag(16)
            && EventFlag(11810310)
            && EventFlag(11815392)
            && (InArea(10000, 1812990) || InArea(10000, 1812350)));
    SetEventFlag(11815396, ON);
    SetMapSoundState(1813800, Enabled);
    DisplayBossHealthBar(Enabled, 1810800, 0, 2232);
    RestartEvent();
});

// tutorial boss BGM OFF
$Event(11815395, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(11815396));
    WaitFor((!EventFlag(11815390) && !InArea(10000, 1812990)) || CharacterDead(1810800));
    SetEventFlag(11815396, OFF);
    SetMapSoundState(1813800, Disabled);
    DisplayBossHealthBar(Disabled, 1810800, 0, 2232);
    RestartEvent();
});

// hammer demon appeared
$Event(11810310, Restart, function() {
    EndIf(EventFlag(11810314));
    EndIf(ThisEvent());
    EndIf(EventFlag(16));
    DeactivateObject(1811990, Disabled);
    DeleteMapSFX(1811991, false);
    SetCharacterHPBarDisplay(1810800, Disabled);
    SetCharacterAIState(1810800, Disabled);
    SetSpecialAnimations(1810800, 9000, -1, -1, -1, -1);
    IssueShortWarpRequest(1810800, TargetEntityType.Area, 1812305, -1);
    WaitFor(InArea(10000, 1812996));
    SetEventFlag(11810314, ON);
    SetSpEffect(1810800, 4160);
    SetSpecialAnimations(1810800, -1, -1, -1, -1, -1);
    ForceAnimationPlayback(1810800, 9060, false, true, false);
    ClearSpEffect(1810800, 4160);
    SetCharacterHome(1810800, 1812300);
    DeactivateObject(1811990, Enabled);
    SpawnMapSFX(1811991);
});

// trapped in the boss room
$Event(11810311, Default, function() {
    WaitFor(
        !EventFlag(16) && !EventFlag(11815390) && !EventFlag(11810315) && InArea(10000, 1812996));
    SetEventFlag(11810315, ON);
    SetEventFlag(11810112, OFF);
    ForceAnimationPlayback(1811111, 3, false, false, false);
    ForceAnimationPlayback(1811115, 1, false, true, false);
});

// escape from the boss room
$Event(11810312, Default, function() {
    WaitFor(!EventFlag(16) && EventFlag(11810315) && PlayerStandingOnHit(1813120));
    SetEventFlag(11810315, OFF);
    SetEventFlag(11810312, ON);
    SetObjactState(1811111, -1, Disabled);
    SetPlayerRespawnPoint(1812961);
    SaveRequest(0);
    ActivateHit(1813121, Enabled);
    ForceAnimationPlayback(1811115, 3, false, true, false);
    ActivateHit(1813121, Disabled);
});

// the door to the boss room does not open
$Event(11810313, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(
        !EventFlag(16)
            && EventFlag(11810312)
            && EventFlag(61810105)
            && ActionButton(TargetEntityType.Object, 1811111, 60, 100, 1.5, 10010400, ReactionType.HollowHuman, 0));
    DisplayGenericDialog(10010160, PromptType.YESNO, NumberofOptions.NoButtons, 1811111, 3);
    RestartEvent();
});

// host enters the tutorial back boss room
$Event(11815380, Default, function() {
    WaitFor(
        !EventFlag(11810900)
            && ActionButtonLineSegmentBossRoom(TargetEntityType.Area, 1812898, 0, -1, 0, 10010403, ReactionType.HollowHuman, 0, 0));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        IssueBossRoomEntryNotification(0);
    }
    RotateCharacter(10000, 1812897);
    ForceAnimationPlayback(10000, 7410, false, true, false);
    ActivateMultiplayerdependantBuffs(1810810);
    RestartEvent();
});

// tutorial back boss starts moving
$Event(11815382, Restart, function() {
    if (EventFlag(11810900)) {
        ChangeCharacterEnableState(1810810, Disabled);
        ForceCharacterDeath(1810810, false);
        RegisterLadder(11810012, 11810013, 1811141);
        EndEvent();
    }
    SetCharacterAIState(1810810, Disabled);
    SetCharacterInvincibility(1810810, Enabled);
    SetCharacterHPBarDisplay(1810810, Disabled);
    WaitFor(InArea(10000, 1812896));
    SetCharacterAIState(1810810, Enabled);
    SetCharacterInvincibility(1810810, Disabled);
    DisplayBossHealthBar(Enabled, 1810810, 0, 2231);
    DeactivateObject(1811890, Enabled);
    SpawnMapSFX(1811891);
});

// tutorial back boss defeat
$Event(11810900, Default, function() {
    WaitFor(CharacterDead(1810810));
    HandleBossDefeat(1810810);
    DeactivateObject(1811890, Disabled);
    DeleteMapSFX(1811891, true);
    RegisterLadder(11810012, 11810013, 1811141);
});

// tutorial back boss BGM ON
$Event(11815384, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(16) && EventFlag(11815382) && InArea(10000, 1812890));
    SetMapSoundState(1813801, Enabled);
});

// tutorial back boss BGM OFF
$Event(11815385, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(11815384) && EventFlag(11810900));
    SetMapSoundState(1813801, Disabled);
});

// to the base
$Event(11810000, Default, function() {
    EndIf(ThisEvent());
    WaitFor(InArea(10000, 1812000));
    SetCharacterBackreadState(1810800, true);
    PrefetchRequest(0);
    WaitFixedTimeFrames(1);
    PlayCutsceneToPlayer(180125, CutscenePlayMode.Skippable, 10000);
    PlayCutsceneAndWarpPlayer(100225, CutscenePlayMode.Skippable, 1022100, 10, 2, 10000);
    WaitFixedTimeFrames(1);
    if (!EventFlag(16)) {
        SetCharacterBackreadState(1810800, false);
    }
    SetEventFlag(11810000, ON);
    SetPlayerRespawnPoint(1022960);
    SaveRequest(0);
    AwardAchievement(28);
});

// to the base (from the 2nd time onwards)
$Event(11810150, Default, function() {
    if (!EventFlag(11810000)) {
        DeactivateObject(1811300, Disabled);
        WaitFor(EventFlag(11810000));
        DeactivateObject(1811300, Enabled);
    }
    WaitFor(ActionButton(TargetEntityType.Area, 1812001, 0, -1, 0, 10010506, ReactionType.All, 0));
    SetSpecialAnimations(10000, 7816, -1, -1, -1, -1);
    ForceAnimationPlayback(10000, 7815, false, true, false);
    if (!HasMultiplayerState(MultiplayerState.Multiplayer)) {
        SetSpecialAnimations(10000, -1, -1, -1, -1, -1);
        PlayCutsceneAndWarpPlayer(180126, CutscenePlayMode.Skippable, 1022121, 10, 2, 10000);
        PlayCutsceneToPlayer(100226, CutscenePlayMode.Skippable, 10000);
        WaitFixedTimeFrames(1);
        AwardAchievement(28);
        RestartEvent();
    }
    act = ActionButton(TargetEntityType.Area, 1812001, 0, -1, 0, 10010507, ReactionType.All, 0);
    area = !InArea(10000, 1812001);
    WaitFor(act || area);
    SetSpecialAnimations(10000, -1, -1, -1, -1, -1);
    if (!area.Passed) {
        ForceAnimationPlayback(10000, 7817, false, true, false);
    }
    RestartEvent();
});

// prison unlock message_XX
$Event(11810100, Default, function(X0_4, X4_4, X8_4) {
    if (ThisEventSlot()) {
        DeactivateObjactAssignIndex(X4_4, -1, 0, Disabled);
        DeactivateObjactAssignIndex(X4_4, -1, 1, Disabled);
        DeactivateObjactAssignIndex(X4_4, -1, 2, Disabled);
        DeactivateObjactAssignIndex(X4_4, -1, 3, Disabled);
        EndEvent();
    }
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        WaitFor(ObjActEventFlag(X0_4));
        SetEventFlag(X0_4, ON);
        if (X8_4 != 0) {
            DisplayGenericDialog(X8_4, PromptType.YESNO, NumberofOptions.NoButtons, X4_4, 3);
        }
    }
    SetNetworkSyncState(Disabled);
    WaitFixedTimeSeconds(2);
    DeactivateObjactAssignIndex(X4_4, -1, 0, Disabled);
    DeactivateObjactAssignIndex(X4_4, -1, 1, Disabled);
    DeactivateObjactAssignIndex(X4_4, -1, 2, Disabled);
    DeactivateObjactAssignIndex(X4_4, -1, 3, Disabled);
});

// courtyard door shortcut
$Event(11810120, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(InArea(10000, 1812020) || (EventFlag(11810105) && InArea(10000, 1812021)));
    SetSpEffect(10000, 4150);
    WaitFixedTimeSeconds(3);
    RestartEvent();
});

// the door of the church opens
$Event(11810110, Default, function() {
    if (ThisEvent()) {
        SetObjactState(1811110, -1, Disabled);
        ReproduceObjectAnimation(1811110, 1);
        EndEvent();
    }
    WaitFor(ObjActEventFlag(11810110));
    SetEventFlag(11810110, ON);
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    DisplayGenericDialog(10010870, PromptType.YESNO, NumberofOptions.NoButtons, 1811110, 3);
});

//the door of the church (front) opens
$Event(11810111, Default, function() {
    WaitFor(ObjActEventFlag(11810111));
    SetEventFlag(11810112, ON);
    RestartEvent();
});

// iron ball rolls
$Event(11810211, Default, function() {
    if (ThisEvent()) {
        DeactivateObject(1811215, Disabled);
        ReproduceObjectAnimation(1811216, 0);
        EndEvent();
    }
    DeactivateObject(1811216, Disabled);
    DeactivateObject(1811217, Disabled);
    WaitFor(InArea(10000, 1812120));
    CreateDamagingObject(11810212, 1811215, 1, 5110, DamageTargetType.Character, 0.8, 2.5, 0);
    ForceAnimationPlayback(1811215, 0, false, true, false);
    DeactivateObject(1811215, Disabled);
    DeactivateObject(1811216, Enabled);
    ReproduceObjectAnimation(1811216, 0);
    DeactivateObject(1811217, Enabled);
});

// map breaks xx
$Event(11810200, Default, function(X0_4, X4_4, X8_4) {
    if (ThisEventSlot()) {
        DeactivateObject(X0_4, Disabled);
        DeactivateObject(X4_4, Disabled);
        DeactivateObject(X8_4, Disabled);
        EndEvent();
    }
    DeactivateObject(X4_4, Disabled);
    WaitFor(ObjectDestroyed(X0_4));
    DeactivateObject(X0_4, Disabled);
    DeactivateObject(X4_4, Enabled);
    RequestObjectDestruction(X4_4, 1);
    DeactivateObject(X8_4, Disabled);
});

// switching display by occupation
$Event(11810400, Default, function(X0_1, X4_4, X8_4, X12_4, X16_1, X17_1, X18_1, X19_1) {
    EndIf(!PlayersClass(X0_1));
    SetVisibilityOfMessage(1813200, Disabled);
    SetVisibilityOfMessage(1813201, Disabled);
    SetVisibilityOfMessage(1813202, Disabled);
    SetVisibilityOfMessage(1813203, Disabled);
    SetVisibilityOfMessage(1813204, Disabled);
    SetObjectTreasureState(1811601, Disabled);
    SetObjectTreasureState(1811602, Disabled);
    SetObjectTreasureState(1811603, Disabled);
    SetObjectTreasureState(1811604, Disabled);
    SetObjectTreasureState(1811605, Disabled);
    SetObjectTreasureState(1811606, Disabled);
    SetObjectTreasureState(1811607, Disabled);
    SetObjectTreasureState(1811608, Disabled);
    SetObjectTreasureState(1811609, Disabled);
    SetObjectTreasureState(1811610, Disabled);
    SetObjectTreasureState(1811611, Disabled);
    SetObjectTreasureState(1811612, Disabled);
    SetObjectTreasureState(1811613, Disabled);
    SetObjectTreasureState(1811614, Disabled);
    SetObjectTreasureState(1811615, Disabled);
    SetObjectTreasureState(1811616, Disabled);
    SetObjectTreasureState(1811617, Disabled);
    SetObjectTreasureState(1811618, Disabled);
    SetObjectTreasureState(1811619, Disabled);
    SetObjectTreasureState(1811620, Disabled);
    SetObjectTreasureState(1811621, Disabled);
    SetObjectTreasureState(1811622, Disabled);
    SetObjectTreasureState(1811623, Disabled);
    SetObjectTreasureState(1811624, Disabled);
    DeactivateObject(1811601, Disabled);
    DeactivateObject(1811602, Disabled);
    DeactivateObject(1811603, Disabled);
    DeactivateObject(1811604, Disabled);
    DeactivateObject(1811605, Disabled);
    DeactivateObject(1811606, Disabled);
    DeactivateObject(1811607, Disabled);
    DeactivateObject(1811608, Disabled);
    DeactivateObject(1811609, Disabled);
    DeactivateObject(1811610, Disabled);
    DeactivateObject(1811611, Disabled);
    DeactivateObject(1811612, Disabled);
    DeactivateObject(1811613, Disabled);
    DeactivateObject(1811614, Disabled);
    DeactivateObject(1811615, Disabled);
    DeactivateObject(1811616, Disabled);
    DeactivateObject(1811617, Disabled);
    DeactivateObject(1811618, Disabled);
    DeactivateObject(1811619, Disabled);
    DeactivateObject(1811620, Disabled);
    DeactivateObject(1811621, Disabled);
    DeactivateObject(1811622, Disabled);
    DeactivateObject(1811623, Disabled);
    DeactivateObject(1811624, Disabled);
    SetVisibilityOfMessage(1813200, X16_1);
    SetVisibilityOfMessage(1813201, X17_1);
    SetVisibilityOfMessage(1813202, X18_1);
    SetVisibilityOfMessage(1813203, X18_1);
    SetVisibilityOfMessage(1813204, X19_1);
    DeactivateObject(X4_4, Enabled);
    DeactivateObject(X8_4, Enabled);
    DeactivateObject(X12_4, Enabled);
    SetObjectTreasureState(X4_4, Enabled);
    SetObjectTreasureState(X8_4, Enabled);
    SetObjectTreasureState(X12_4, Enabled);
});

// est description
$Event(11810450, Default, function() {
    EndIf(ThisEvent());
    SetVisibilityOfMessage(1813220, Disabled);
    SetVisibilityOfMessage(1813221, Disabled);
    WaitFor(EventFlag(11810590) || EventFlag(50000082));
    SetVisibilityOfMessage(1813220, Enabled);
    SetVisibilityOfMessage(1813221, Enabled);
});

// the floor was damaged
$Event(11810220, Default, function() {
    if (ThisEvent()) {
        SetEventFlag(11810220, OFF);
        RequestObjectRestoration(1811200);
        RequestObjectRestoration(1811201);
        RequestObjectRestoration(1811202);
    }
    DeactivateObject(1811201, Disabled);
    WaitFor(
        EventFlag(11810000) && HasMultiplayerState(MultiplayerState.Host) && InArea(10000, 1812400));
    SetEventFlag(11810220, ON);
    DeactivateObject(1811200, Disabled);
    DeactivateObject(1811201, Enabled);
    RequestObjectDestruction(1811201, 1);
    DeactivateObject(1811202, Disabled);
    PlaySE(1811200, SoundType.oObject, 851000000);
    SpawnOneshotSFX(TargetEntityType.Object, 1811200, -1, 180100);
});

// fat demon invincible patrol
$Event(11810320, Default, function() {
    EndIf(EventFlag(11810000));
    SetCharacterInvincibility(1810810, Enabled);
    WaitFor(CharacterBackreadStatus(1810810));
    RequestCharacterAICommand(1810810, 10, 0);
    WaitFor(EventFlag(11810000));
    SetCharacterInvincibility(1810810, Disabled);
    WaitFor(CharacterBackreadStatus(1810810));
    RequestCharacterAICommand(1810810, -1, 0);
});

// THE DEMON WAS DESTROYED BONUS
$Event(11810300, Default, function() {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    EndIf(ThisEvent());
    EndIf(EventFlag(16));
    if (!EventFlag(11810301)) {
        SetEventFlag(50000081, ON);
        SetEventFlag(50001661, ON);
        SetEventFlag(11810301, ON);
    }
    WaitFor(!EventFlag(16) && !EventFlag(11810090) && HPRatio(1810800) <= 0);
    SetEventFlag(50000081, OFF);
    SetEventFlag(50001661, OFF);
    SetEventFlag(50001660, ON);
});

// tutorial strong enemy appearance control
$Event(11810850, Restart, function(X0_4, X4_4) {
    if (ThisEventSlot()) {
        ChangeCharacterEnableState(X0_4, Disabled);
        ForceCharacterDeath(X0_4, false);
        EndEvent();
    }
    WaitFor(CharacterDead(X0_4));
    EndIf(X4_4 == 0);
    EndIf(!(CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.Hollow)));
    AwardItemsIncludingClients(X4_4);
});

// return to the asylum
$Event(11810350, Restart, function() {
    if (!EventFlag(11810000)) {
        DeactivateObject(1811650, Disabled);
        ChangeCharacterEnableState(1810200, Disabled);
        ChangeCharacterEnableState(1810201, Disabled);
        ChangeCharacterEnableState(1810202, Disabled);
        ChangeCharacterEnableState(1810203, Disabled);
        ChangeCharacterEnableState(1810204, Disabled);
        ChangeCharacterEnableState(1810205, Disabled);
        ChangeCharacterEnableState(1810206, Disabled);
        ChangeCharacterEnableState(1810207, Disabled);
        ChangeCharacterEnableState(1810208, Disabled);
        ChangeCharacterEnableState(1810209, Disabled);
        ChangeCharacterEnableState(1810210, Disabled);
        ChangeCharacterEnableState(1810211, Disabled);
        ChangeCharacterEnableState(1810212, Disabled);
        ChangeCharacterEnableState(1810213, Disabled);
        WaitFor(EventFlag(11810000));
        SetEventFlag(11810211, OFF);
        ChangeCharacterEnableState(1810200, Enabled);
        ChangeCharacterEnableState(1810201, Enabled);
        ChangeCharacterEnableState(1810202, Enabled);
        ChangeCharacterEnableState(1810203, Enabled);
        ChangeCharacterEnableState(1810204, Enabled);
        ChangeCharacterEnableState(1810205, Enabled);
        ChangeCharacterEnableState(1810206, Enabled);
        ChangeCharacterEnableState(1810207, Enabled);
        ChangeCharacterEnableState(1810208, Enabled);
        ChangeCharacterEnableState(1810209, Enabled);
        ChangeCharacterEnableState(1810210, Enabled);
        ChangeCharacterEnableState(1810211, Enabled);
        ChangeCharacterEnableState(1810212, Enabled);
        ChangeCharacterEnableState(1810213, Enabled);
        DeactivateObject(1811650, Enabled);
    }
    SetObjectTreasureState(1811650, Enabled);
    DeactivateObject(1811600, Disabled);
    ChangeCharacterEnableState(1810101, Disabled);
    ChangeCharacterEnableState(1810102, Disabled);
    ChangeCharacterEnableState(1810103, Disabled);
    ChangeCharacterEnableState(1810104, Disabled);
    ChangeCharacterEnableState(1810106, Disabled);
    ChangeCharacterEnableState(1810107, Disabled);
    ChangeCharacterEnableState(1810108, Disabled);
    ChangeCharacterEnableState(1810110, Disabled);
    ChangeCharacterEnableState(1810111, Disabled);
    ChangeCharacterEnableState(1810113, Disabled);
    // silver knight archer
    ChangeCharacterEnableState(1810114, Disabled);
});

// eagle maiden
$Event(11810600, Default, function() {
    flag = EventFlag(11815200);
    flag2 = EventFlag(11815201);
    flag3 = EventFlag(11815202);
    WaitFor(flag || flag2 || flag3);
    if (flag.Passed) {
        SetEventFlag(11815100, ON);
        SetEventFlag(11815101, OFF);
        SetEventFlag(11815102, OFF);
        BatchSetEventFlags(11815200, 11815202, OFF);
        RestartEvent();
    }
    if (flag3.Passed) {
        SetEventFlag(11815100, OFF);
        SetEventFlag(11815101, OFF);
        SetEventFlag(11815102, ON);
        SetEventFlag(71810093, OFF);
        BatchSetEventFlags(11815200, 11815202, OFF);
        RestartEvent();
    }
    SetEventFlag(11815100, OFF);
    SetEventFlag(11815101, ON);
    SetEventFlag(11815102, OFF);
    SetEventFlag(71810092, OFF);
    BatchSetEventFlags(11815200, 11815202, OFF);
    RestartEvent();
});

// eagle maiden exchange establishment
$Event(11810641, Default, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFor(DroppedItemsInArea(1812200));
    if (!DroppedItem(X0_4, X4_4)) {
        SetEventFlag(11815201, ON);
        RestartEvent();
    }
    if (!EventFlag(X12_4)) {
        SetEventFlag(11815200, ON);
        SetSnugglyNextTrade(X8_4);
        RestartEvent();
    }
    SetEventFlag(11815202, ON);
    RestartEvent();
});

// hawk girl exchange placement
$Event(11815110, Default, function(X0_4, X4_4, X8_4) {
    EndIf(!EventFlag(X0_4));
    EndIf(EventFlag(X8_4));
    WaitFixedTimeFrames(1);
    SpawnSnugglyItem(X4_4, 1812201, X0_4, 1813102);
});

// 鷹娘_1秒ウェイト
$Event(11815150, Default, function() {
    WaitFor(ElapsedSeconds(1));
    SetEventFlag(11815151, ON);
});

// 誓約済み 会話調整
$Event(11810050, Default, function() {
    EndIf(!PlayersCovenant(8));
    SetEventFlag(71510036, ON);
    SetEventFlag(71510037, ON);
});

// NPC敵対（チュートリアル）
$Event(11810510, Default, function(X0_4, X4_4) {
    hpDmg = HPRatio(X0_4) <= 0.9 && HPRatio(X0_4) > 0 && CharacterDamagedBy(X0_4, 10000);
    flag = EventFlag(X4_4) && ThisEventSlot();
    flag2 = EventFlag(X4_4) && !ThisEventSlot();
    WaitFor(hpDmg || flag || flag2);
    if (flag2.Passed) {
        ChangeCharacterEnableState(X0_4, Disabled);
        WaitFor(EventFlag(703));
    }
    SetEventFlag(X4_4, ON);
    SetCharacterTeamType(X0_4, TeamType.HostileAlly);
    SaveRequest(0);
});

// NPC死亡（チュートリアル）
$Event(11810520, Default, function(X0_4, X4_4, X8_4, X12_4) {
    if (ThisEventSlot()) {
        ForceCharacterTreasure(X0_4);
        EndEvent();
    }
    WaitFor(HPRatio(X0_4) <= 0);
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
});

// 騎士オストラ 死亡
$Event(11810530, Default, function(X0_4) {
    flagArea = EventFlag(1060)
        && (EventFlag(11810590) || EventFlag(11810591) || EventFlag(11810592))
        && (InArea(10000, 1812121) || InArea(10000, 1812990))
        && !ThisEvent();
    flag = ThisEvent();
    WaitFor(flagArea || flag);
    EndIf(flag.Passed);
    ForceCharacterDeath(X0_4, true);
});

// 騎士オストラ 亡者
$Event(11810531, Default, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFor(EventFlag(1073) && EventFlag(11810000));
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
    ChangeCharacterEnableState(X0_4, Enabled);
});

// 騎士オストラ 死亡（亡者）
$Event(11810532, Default, function(X0_4, X4_4, X8_4, X12_4) {
    if (ThisEvent()) {
        ForceCharacterTreasure(X0_4);
        EndEvent();
    }
    WaitFor(EventFlag(1061) && HPRatio(X0_4) <= 0 && PlayerInMap(18, 1));
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X12_4, ON);
});

// 騎士オストラ HP初期化
$Event(11815010, Restart, function() {
    EndIf(ThisEvent());
    SetSpEffect(6023, 5492);
    SetCharacterHPBarDisplay(6023, Disabled);
    WaitFixedTimeFrames(5);
    SetCharacterHPBarDisplay(6023, Enabled);
});
