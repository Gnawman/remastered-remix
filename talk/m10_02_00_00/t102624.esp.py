from soulstruct.darksouls1r.ezstate.esd import *


class State_0(State):
    """ 0: No description. """

    def test(self):
        return State_17


class State_1(State):
    """ 1: No description. """

    def previous_states(self):
        return [State_26]

    def enter(self):
        DebugEvent(message='買って立ち去る')

    def test(self):
        return State_41


class State_2(State):
    """ 2: No description. """

    def previous_states(self):
        return [State_26]

    def enter(self):
        DebugEvent(message='買わず立ち去る')

    def test(self):
        return State_42


class State_3(State):
    """ 3: No description. """

    def previous_states(self):
        return [State_4]

    def enter(self):
        OpenRegularShop(1200, 1299)

    def test(self):
        if IsAttackedBySomeone() == 1 or CheckSelfDeath() == 1:
            return State_20
        if IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled() or IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf() > 120 or GetDistanceToPlayer() > 3:
            return State_20
        if IsMenuOpen(11) == 0:
            return State_5


class State_4(State):
    """ 4: No description. """

    def previous_states(self):
        return [State_5]

    def test(self):
        return State_3


class State_5(State):
    """ 5: No description. """

    def previous_states(self):
        return [State_3, State_15, State_24]

    def enter(self):
        AddTalkListData(menu_index=1, menu_text=15000010, required_flag=-1)
        ShowShopMessage(0, 0, 0)
        AddTalkListData(menu_index=3, menu_text=15000000, required_flag=-1)
        AddTalkListData(menu_index=4, menu_text=15000005, required_flag=-1)

    def test(self):
        if IsAttackedBySomeone() == 1 or CheckSelfDeath() == 1:
            return State_21
        if GetTalkListEntryResult() == 0:
            return State_26
        if GetTalkListEntryResult() == 3:
            return State_29
        if GetTalkListEntryResult() == 1:
            return State_4
        if GetTalkListEntryResult() == 4:
            return State_26
        if IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled() or IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf() > 120 or GetDistanceToPlayer() > 5:
            return State_21

    def exit(self):
        ClearTalkListData()


class State_6(State):
    """ 6: No description. """

    def previous_states(self):
        return [State_7, State_20, State_21]

    def enter(self):
        ForceEndTalk(unk1=0)

    def test(self):
        return State_17


class State_7(State):
    """ 7: No description. """

    def previous_states(self):
        return [State_20, State_21]

    def enter(self):
        TalkToPlayer(conversation=34000400, unk1=-1, unk2=-1)

    def test(self):
        if IsAttackedBySomeone() == 1 or CheckSelfDeath() == 1:
            return State_16
        if GetDistanceToPlayer() >= 12:
            return State_6
        if HasTalkEnded() == 1:
            return State_28


class State_8(State):
    """ 8: No description. """

    def previous_states(self):
        return [State_9]

    def enter(self):
        SetFlagState(flag=71000045, state=1)

    def test(self):
        return State_17


class State_9(State):
    """ 9: No description. """

    def previous_states(self):
        return [State_17]

    def enter(self):
        TalkToPlayer(conversation=34000700, unk1=-1, unk2=-1)
        SetFlagState(flag=71000045, state=1)
        ForceCloseMenu()

    def test(self):
        if CheckSelfDeath() == 1:
            return State_70
        if HasTalkEnded() == 1:
            return State_8
        if GetDistanceToPlayer() >= 20 or GetPlayerYDistance() > 1:
            return State_22


class State_10(State):
    """ 10: No description. """

    def previous_states(self):
        return [State_11, State_12, State_62, State_64, State_66]

    def enter(self):
        ClearTalkDisabledState()
        RemoveMyAggro()

    def test(self):
        return State_17


class State_11(State):
    """ 11: No description. """

    def previous_states(self):
        return [State_16]

    def enter(self):
        ForceEndTalk(unk1=3)

    def test(self):
        return State_10


class State_12(State):
    """ 12: No description. """

    def previous_states(self):
        return [State_13]

    def enter(self):
        SetFlagState(flag=71000041, state=1)

    def test(self):
        return State_10


class State_13(State):
    """ 13: No description. """

    def previous_states(self):
        return [State_16]

    def enter(self):
        TalkToPlayer(conversation=34000600, unk1=-1, unk2=-1)
        SetFlagState(flag=71000041, state=1)
        ForceCloseMenu()

    def test(self):
        if CheckSelfDeath() == 1:
            return State_70
        if HasTalkEnded() == 1:
            return State_12
        if IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled() or IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf() > 120 or GetDistanceToPlayer() > 5:
            return State_22


class State_14(State):
    """ 14: No description. """

    def previous_states(self):
        return [State_17]

    def enter(self):
        TalkToPlayer(conversation=34000100, unk1=-1, unk2=-1)
        DisplayOneLineHelp(text_id=-1)

    def test(self):
        if IsAttackedBySomeone() == 1 or CheckSelfDeath() == 1:
            return State_16
        if HasTalkEnded() == 1:
            return State_37
        if IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled() or IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf() > 120 or GetDistanceToPlayer() > 5:
            return State_22


class State_15(State):
    """ 15: No description. """

    def previous_states(self):
        return [State_53, State_55, State_57, State_59, State_61]

    def test(self):
        return State_5


class State_16(State):
    """ 16: No description. """

    def previous_states(self):
        return [State_7, State_14, State_25, State_27, State_31, State_34, State_36, State_39, State_40, State_43, State_44, State_45, State_52, State_54, State_56, State_58, State_60, State_72]

    def enter(self):
        ClearTalkProgressData()
        ForceEndTalk(unk1=3)

    def test(self):
        if CheckSelfDeath() == 1 and GetDistanceToPlayer() <= 15:
            return State_69
        if GetFlagState(71000044) == 0 and IsPlayerAttacking() == 1 and GetDistanceToPlayer() <= 5 and GetFlagState(71000043) == 1 and GetSelfHP() >= 90:
            return State_67
        if GetFlagState(71000043) == 0 and IsPlayerAttacking() == 1 and GetDistanceToPlayer() <= 5 and GetFlagState(71000042) == 1 and GetSelfHP() >= 90:
            return State_65
        if GetFlagState(71000042) == 0 and IsPlayerAttacking() == 1 and GetDistanceToPlayer() <= 5 and GetFlagState(71000041) == 1 and GetSelfHP() >= 90:
            return State_63
        if GetFlagState(71000041) == 0 and IsPlayerAttacking() == 1 and GetDistanceToPlayer() <= 5 and GetSelfHP() >= 90:
            return State_13
        if GetFlagState(71000044) == 1:
            return State_11
        else:
            return State_11

    def exit(self):
        RemoveMyAggro()


class State_17(State):
    """ 17: No description. """

    def previous_states(self):
        return [State_0, State_6, State_8, State_10, State_18, State_19, State_20, State_23, State_28, State_32, State_46, State_47, State_48, State_49, State_50, State_51, State_68, State_69]

    def enter(self):
        DebugEvent(message='待機')
        SetUpdateDistance(distance=25)

    def test(self):
        if CheckSelfDeath() == 1 and GetFlagState(1412) == 0 and GetDistanceToPlayer() <= 15:
            return State_32
        if GetFlagState(71000045) == 0 and GetDistanceToPlayer() <= 15 and GetFlagState(1411) == 1 and GetPlayerYDistance() < 1:
            return State_9
        if GetDistanceToPlayer() <= 15 and GetFlagState(1411) == 1 and GetFlagState(71000045) == 1 and GetPlayerYDistance() < 1:
            return State_68
        if IsPlayerTalkingToMe() == 1 and GetRelativeAngleBetweenPlayerAndSelf() <= 45 and GetDistanceToPlayer() <= 3 and GetOneLineHelpStatus() == 1 and GetFlagState(11025022) == 1 and GetFlagState(11026103) == 1:
            return State_31
        if GetFlagState(11026103) == 0 and IsPlayerTalkingToMe() == 1 and GetRelativeAngleBetweenPlayerAndSelf() <= 45 and GetDistanceToPlayer() <= 3 and GetOneLineHelpStatus() == 1 and GetFlagState(2) == 1 and GetFlagState(71000030) == 1:
            return State_36
        if GetFlagState(11026103) == 0 and IsPlayerTalkingToMe() == 1 and GetRelativeAngleBetweenPlayerAndSelf() <= 45 and GetDistanceToPlayer() <= 3 and GetOneLineHelpStatus() == 1 and GetFlagState(71000030) == 1:
            return State_34
        if IsPlayerTalkingToMe() == 1 and GetRelativeAngleBetweenPlayerAndSelf() <= 45 and GetDistanceToPlayer() <= 3 and GetOneLineHelpStatus() == 1 and GetFlagState(71000030) == 1 and GetFlagState(11026103) == 1:
            return State_14
        if GetFlagState(11026103) == 0 and IsPlayerTalkingToMe() == 1 and GetRelativeAngleBetweenPlayerAndSelf() <= 45 and GetDistanceToPlayer() <= 3 and GetOneLineHelpStatus() == 1:
            return State_27
        if GetOneLineHelpStatus() == 0 and HasDisableTalkPeriodElapsed() == 1 and IsTalkingToSomeoneElse() == 0 and CheckSelfDeath() == 0 and IsCharacterDisabled() == 0 and IsClientPlayer() == 0 and GetRelativeAngleBetweenPlayerAndSelf() <= 45 and GetDistanceToPlayer() <= 3 and GetFlagState(1411) == 0 and GetFlagState(1412) == 0 and GetSelfHP() >= 60:
            return State_18
        if GetOneLineHelpStatus() == 1 and (IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled() or IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf() > 45 or GetDistanceToPlayer() > 3):
            return State_19
        if IsAttackedBySomeone() == 1 and GetFlagState(1412) == 0:
            return State_25


class State_18(State):
    """ 18: No description. """

    def previous_states(self):
        return [State_17]

    def enter(self):
        DisplayOneLineHelp(text_id=10010200)

    def test(self):
        return State_17


class State_19(State):
    """ 19: No description. """

    def previous_states(self):
        return [State_17]

    def enter(self):
        DisplayOneLineHelp(text_id=-1)

    def test(self):
        return State_17


class State_20(State):
    """ 20: No description. """

    def previous_states(self):
        return [State_3]

    def enter(self):
        CloseMenu()

    def test(self):
        if CheckSelfDeath() == 1 and GetDistanceToPlayer() <= 15:
            return State_69
        if IsPlayerMovingACertainDistance(1) == 1:
            return State_7
        if IsPlayerMovingACertainDistance(1) == 0:
            return State_6
        else:
            return State_17


class State_21(State):
    """ 21: No description. """

    def previous_states(self):
        return [State_5]

    def enter(self):
        ForceEndTalk(unk1=0)
        ClearTalkProgressData()
        CloseShopMessage()

    def test(self):
        if CheckSelfDeath() == 1 and GetDistanceToPlayer() <= 15:
            return State_69
        if IsPlayerMovingACertainDistance(1) == 1:
            return State_7
        if IsPlayerMovingACertainDistance(1) == 0:
            return State_6


class State_22(State):
    """ 22: No description. """

    def previous_states(self):
        return [State_9, State_13, State_14, State_27, State_31, State_32, State_34, State_36, State_39, State_40, State_43, State_44, State_45, State_52, State_54, State_56, State_58, State_60, State_63, State_65, State_67, State_68, State_69, State_72]

    def enter(self):
        ClearTalkProgressData()

    def test(self):
        return State_23


class State_23(State):
    """ 23: No description. """

    def previous_states(self):
        return [State_22]

    def enter(self):
        ForceEndTalk(unk1=0)

    def test(self):
        return State_17


class State_24(State):
    """ 24: No description. """

    def previous_states(self):
        return [State_30, State_33, State_35, State_37, State_38]

    def enter(self):
        ClearTalkActionState()

    def test(self):
        return State_5


class State_25(State):
    """ 25: No description. """

    def previous_states(self):
        return [State_17]

    def enter(self):
        DisplayOneLineHelp(text_id=-1)

    def test(self):
        return State_16


class State_26(State):
    """ 26: No description. """

    def previous_states(self):
        return [State_5]

    def test(self):
        if DidYouDoSomethingInTheMenu(11) == 0:
            return State_2
        if DidYouDoSomethingInTheMenu(11) == 1:
            return State_1
        else:
            return State_51


class State_27(State):
    """ 27: No description. """

    def previous_states(self):
        return [State_17]

    def enter(self):
        TalkToPlayer(conversation=34000000, unk1=-1, unk2=-1)
        DisplayOneLineHelp(text_id=-1)

    def test(self):
        if IsAttackedBySomeone() == 1 or CheckSelfDeath() == 1:
            return State_16
        if HasTalkEnded() == 1:
            return State_33
        if IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled() or IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf() > 120 or GetDistanceToPlayer() > 5:
            return State_22


class State_28(State):
    """ 28: No description. """

    def previous_states(self):
        return [State_7]

    def enter(self):
        SetFlagState(flag=11025022, state=1)

    def test(self):
        return State_17


class State_29(State):
    """ 29: No description. """

    def previous_states(self):
        return [State_5]

    def test(self):
        if GetFlagState(11010700) == 1 and GetFlagState(71000036) == 0:
            return State_58
        if GetFlagState(2) == 1 and GetFlagState(71000035) == 0:
            return State_56
        if GetFlagState(71000033) == 1 and GetFlagState(71000034) == 0:
            return State_54
        if GetFlagState(11400200) == 0:
            return State_52
        if GetFlagState(11400200) == 1:
            return State_60


class State_30(State):
    """ 30: No description. """

    def previous_states(self):
        return [State_31]

    def enter(self):
        SetFlagState(flag=11025022, state=0)

    def test(self):
        return State_24


class State_31(State):
    """ 31: No description. """

    def previous_states(self):
        return [State_17]

    def enter(self):
        TalkToPlayer(conversation=34000500, unk1=-1, unk2=-1)
        DisplayOneLineHelp(text_id=-1)

    def test(self):
        if IsAttackedBySomeone() == 1 or CheckSelfDeath() == 1:
            return State_16
        if HasTalkEnded() == 1:
            return State_30
        if IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled() or IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf() > 120 or GetDistanceToPlayer() > 5:
            return State_22


class State_32(State):
    """ 32: No description. """

    def previous_states(self):
        return [State_17, State_70]

    def enter(self):
        TalkToPlayer(conversation=34000800, unk1=-1, unk2=-1)
        DisplayOneLineHelp(text_id=-1)
        ForceCloseMenu()

    def test(self):
        if HasTalkEnded() == 1:
            return State_17
        if GetDistanceToPlayer() >= 20:
            return State_22


class State_33(State):
    """ 33: No description. """

    def previous_states(self):
        return [State_27]

    def enter(self):
        SetFlagState(flag=71000030, state=1)
        SetFlagState(flag=11026103, state=1)

    def test(self):
        return State_24


class State_34(State):
    """ 34: No description. """

    def previous_states(self):
        return [State_17]

    def enter(self):
        TalkToPlayer(conversation=34000120, unk1=-1, unk2=-1)
        DisplayOneLineHelp(text_id=-1)

    def test(self):
        if IsAttackedBySomeone() == 1 or CheckSelfDeath() == 1:
            return State_16
        if HasTalkEnded() == 1:
            return State_35
        if IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled() or IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf() > 120 or GetDistanceToPlayer() > 5:
            return State_22


class State_35(State):
    """ 35: No description. """

    def previous_states(self):
        return [State_34]

    def enter(self):
        SetFlagState(flag=71000031, state=1)
        SetFlagState(flag=11026103, state=1)

    def test(self):
        return State_24


class State_36(State):
    """ 36: No description. """

    def previous_states(self):
        return [State_17]

    def enter(self):
        TalkToPlayer(conversation=34000140, unk1=-1, unk2=-1)
        DisplayOneLineHelp(text_id=-1)

    def test(self):
        if IsAttackedBySomeone() == 1 or CheckSelfDeath() == 1:
            return State_16
        if HasTalkEnded() == 1:
            return State_38
        if IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled() or IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf() > 120 or GetDistanceToPlayer() > 5:
            return State_22


class State_37(State):
    """ 37: No description. """

    def previous_states(self):
        return [State_14]

    def enter(self):
        SetFlagState(flag=71000031, state=1)
        SetFlagState(flag=11026103, state=1)

    def test(self):
        return State_24


class State_38(State):
    """ 38: No description. """

    def previous_states(self):
        return [State_36]

    def enter(self):
        SetFlagState(flag=71000032, state=1)
        SetFlagState(flag=11026103, state=1)

    def test(self):
        return State_24


class State_39(State):
    """ 39: No description. """

    def previous_states(self):
        return [State_71]

    def enter(self):
        TalkToPlayer(conversation=34000200, unk1=-1, unk2=-1)

    def test(self):
        if IsAttackedBySomeone() == 1 or CheckSelfDeath() == 1:
            return State_16
        if IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled() or IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf() > 120 or GetDistanceToPlayer() > 5:
            return State_22
        if HasTalkEnded() == 1:
            return State_48


class State_40(State):
    """ 40: No description. """

    def previous_states(self):
        return [State_41]

    def enter(self):
        TalkToPlayer(conversation=34000300, unk1=-1, unk2=-1)

    def test(self):
        if IsAttackedBySomeone() == 1 or CheckSelfDeath() == 1:
            return State_16
        if HasTalkEnded() == 1:
            return State_46
        if IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled() or IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf() > 120 or GetDistanceToPlayer() > 5:
            return State_22


class State_41(State):
    """ 41: No description. """

    def previous_states(self):
        return [State_1]

    def test(self):
        if GetFlagState(71000040) == 1:
            return State_43
        if GetFlagState(71000040) == 0:
            return State_40


class State_42(State):
    """ 42: No description. """

    def previous_states(self):
        return [State_2]

    def test(self):
        if GetFlagState(71000038) == 1 and GetFlagState(71000039) == 1:
            return State_45
        if GetFlagState(71000038) == 1 and GetFlagState(71000039) == 0:
            return State_44
        if GetFlagState(71000038) == 0 and GetFlagState(71000039) == 0:
            return State_71


class State_43(State):
    """ 43: No description. """

    def previous_states(self):
        return [State_41]

    def enter(self):
        TalkToPlayer(conversation=34000320, unk1=-1, unk2=-1)

    def test(self):
        if IsAttackedBySomeone() == 1 or CheckSelfDeath() == 1:
            return State_16
        if HasTalkEnded() == 1:
            return State_47
        if IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled() or IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf() > 120 or GetDistanceToPlayer() > 5:
            return State_22


class State_44(State):
    """ 44: No description. """

    def previous_states(self):
        return [State_42]

    def enter(self):
        TalkToPlayer(conversation=34000220, unk1=-1, unk2=-1)

    def test(self):
        if IsAttackedBySomeone() == 1 or CheckSelfDeath() == 1:
            return State_16
        if HasTalkEnded() == 1:
            return State_49
        if IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled() or IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf() > 120 or GetDistanceToPlayer() > 5:
            return State_22


class State_45(State):
    """ 45: No description. """

    def previous_states(self):
        return [State_42]

    def enter(self):
        TalkToPlayer(conversation=34000240, unk1=-1, unk2=-1)

    def test(self):
        if IsAttackedBySomeone() == 1 or CheckSelfDeath() == 1:
            return State_16
        if HasTalkEnded() == 1:
            return State_50
        if IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled() or IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf() > 120 or GetDistanceToPlayer() > 5:
            return State_22


class State_46(State):
    """ 46: No description. """

    def previous_states(self):
        return [State_40]

    def enter(self):
        SetFlagState(flag=71000040, state=1)

    def test(self):
        return State_17


class State_47(State):
    """ 47: No description. """

    def previous_states(self):
        return [State_43]

    def enter(self):
        SetFlagState(flag=71000040, state=0)

    def test(self):
        return State_17


class State_48(State):
    """ 48: No description. """

    def previous_states(self):
        return [State_39, State_72]

    def enter(self):
        SetFlagState(flag=71000038, state=1)
        SetFlagState(flag=71000039, state=0)

    def test(self):
        return State_17


class State_49(State):
    """ 49: No description. """

    def previous_states(self):
        return [State_44]

    def enter(self):
        SetFlagState(flag=71000038, state=1)
        SetFlagState(flag=71000039, state=1)

    def test(self):
        return State_17


class State_50(State):
    """ 50: No description. """

    def previous_states(self):
        return [State_45]

    def enter(self):
        SetFlagState(flag=71000038, state=0)
        SetFlagState(flag=71000039, state=0)

    def test(self):
        return State_17


class State_51(State):
    """ 51: No description. """

    def previous_states(self):
        return [State_26]

    def enter(self):
        ClearTalkDisabledState()

    def test(self):
        return State_17


class State_52(State):
    """ 52: No description. """

    def previous_states(self):
        return [State_29]

    def enter(self):
        TalkToPlayer(conversation=34000900, unk1=-1, unk2=-1)

    def test(self):
        if IsAttackedBySomeone() == 1 or CheckSelfDeath() == 1:
            return State_16
        if HasTalkEnded() == 1:
            return State_53
        if IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled() or IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf() > 120 or GetDistanceToPlayer() > 5:
            return State_22


class State_53(State):
    """ 53: No description. """

    def previous_states(self):
        return [State_52]

    def enter(self):
        SetFlagState(flag=71000033, state=1)

    def test(self):
        return State_15


class State_54(State):
    """ 54: No description. """

    def previous_states(self):
        return [State_29]

    def enter(self):
        TalkToPlayer(conversation=34001100, unk1=-1, unk2=-1)

    def test(self):
        if IsAttackedBySomeone() == 1 or CheckSelfDeath() == 1:
            return State_16
        if HasTalkEnded() == 1:
            return State_55
        if IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled() or IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf() > 120 or GetDistanceToPlayer() > 5:
            return State_22


class State_55(State):
    """ 55: No description. """

    def previous_states(self):
        return [State_54]

    def enter(self):
        SetFlagState(flag=71000034, state=1)

    def test(self):
        return State_15


class State_56(State):
    """ 56: No description. """

    def previous_states(self):
        return [State_29]

    def enter(self):
        TalkToPlayer(conversation=34001000, unk1=-1, unk2=-1)

    def test(self):
        if IsAttackedBySomeone() == 1 or CheckSelfDeath() == 1:
            return State_16
        if HasTalkEnded() == 1:
            return State_57
        if IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled() or IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf() > 120 or GetDistanceToPlayer() > 5:
            return State_22


class State_57(State):
    """ 57: No description. """

    def previous_states(self):
        return [State_56]

    def enter(self):
        SetFlagState(flag=71000035, state=1)

    def test(self):
        return State_15


class State_58(State):
    """ 58: No description. """

    def previous_states(self):
        return [State_29]

    def enter(self):
        TalkToPlayer(conversation=34001200, unk1=-1, unk2=-1)

    def test(self):
        if IsAttackedBySomeone() == 1 or CheckSelfDeath() == 1:
            return State_16
        if HasTalkEnded() == 1:
            return State_59
        if IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled() or IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf() > 120 or GetDistanceToPlayer() > 5:
            return State_22


class State_59(State):
    """ 59: No description. """

    def previous_states(self):
        return [State_58]

    def enter(self):
        SetFlagState(flag=71000036, state=1)

    def test(self):
        return State_15


class State_60(State):
    """ 60: No description. """

    def previous_states(self):
        return [State_29]

    def enter(self):
        TalkToPlayer(conversation=34001300, unk1=-1, unk2=-1)

    def test(self):
        if IsAttackedBySomeone() == 1 or CheckSelfDeath() == 1:
            return State_16
        if HasTalkEnded() == 1:
            return State_61
        if IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled() or IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf() > 120 or GetDistanceToPlayer() > 5:
            return State_22


class State_61(State):
    """ 61: No description. """

    def previous_states(self):
        return [State_60]

    def enter(self):
        SetFlagState(flag=71000037, state=1)

    def test(self):
        return State_15


class State_62(State):
    """ 62: No description. """

    def previous_states(self):
        return [State_63]

    def enter(self):
        SetFlagState(flag=71000042, state=1)

    def test(self):
        return State_10


class State_63(State):
    """ 63: No description. """

    def previous_states(self):
        return [State_16]

    def enter(self):
        TalkToPlayer(conversation=34000610, unk1=-1, unk2=-1)
        SetFlagState(flag=71000042, state=1)
        ForceCloseMenu()

    def test(self):
        if CheckSelfDeath() == 1:
            return State_70
        if HasTalkEnded() == 1:
            return State_62
        if IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled() or IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf() > 120 or GetDistanceToPlayer() > 5:
            return State_22


class State_64(State):
    """ 64: No description. """

    def previous_states(self):
        return [State_65]

    def enter(self):
        SetFlagState(flag=71000043, state=1)

    def test(self):
        return State_10


class State_65(State):
    """ 65: No description. """

    def previous_states(self):
        return [State_16]

    def enter(self):
        TalkToPlayer(conversation=34000620, unk1=-1, unk2=-1)
        SetFlagState(flag=71000043, state=1)
        ForceCloseMenu()

    def test(self):
        if CheckSelfDeath() == 1:
            return State_70
        if HasTalkEnded() == 1:
            return State_64
        if IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled() or IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf() > 120 or GetDistanceToPlayer() > 5:
            return State_22


class State_66(State):
    """ 66: No description. """

    def previous_states(self):
        return [State_67]

    def enter(self):
        SetFlagState(flag=71000044, state=1)

    def test(self):
        return State_10


class State_67(State):
    """ 67: No description. """

    def previous_states(self):
        return [State_16]

    def enter(self):
        TalkToPlayer(conversation=34000630, unk1=-1, unk2=-1)
        SetFlagState(flag=71000044, state=1)
        ForceCloseMenu()

    def test(self):
        if CheckSelfDeath() == 1:
            return State_70
        if HasTalkEnded() == 1:
            return State_66
        if IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled() or IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf() > 120 or GetDistanceToPlayer() > 5:
            return State_22


class State_68(State):
    """ 68: No description. """

    def previous_states(self):
        return [State_17]

    def enter(self):
        TalkToPlayer(conversation=34000703, unk1=-1, unk2=-1)
        ForceCloseMenu()

    def test(self):
        if CheckSelfDeath() == 1:
            return State_70
        if HasTalkEnded() == 1:
            return State_17
        if GetDistanceToPlayer() >= 20 or GetPlayerYDistance() > 1:
            return State_22


class State_69(State):
    """ 69: No description. """

    def previous_states(self):
        return [State_16, State_20, State_21]

    def enter(self):
        TalkToPlayer(conversation=34000800, unk1=-1, unk2=-1)
        DisplayOneLineHelp(text_id=-1)
        ForceCloseMenu()

    def test(self):
        if HasTalkEnded() == 1:
            return State_17
        if GetDistanceToPlayer() >= 20:
            return State_22


class State_70(State):
    """ 70: No description. """

    def previous_states(self):
        return [State_9, State_13, State_63, State_65, State_67, State_68]

    def enter(self):
        ClearTalkProgressData()

    def test(self):
        if CheckSelfDeath() == 1 and GetDistanceToPlayer() <= 15:
            return State_32

    def exit(self):
        RemoveMyAggro()


class State_71(State):
    """ 71: No description. """

    def previous_states(self):
        return [State_42]

    def test(self):
        if ComparePlayerStatus(12, 0, 1) == 1:
            return State_39
        if ComparePlayerStatus(12, 0, 0) == 1:
            return State_72


class State_72(State):
    """ 72: No description. """

    def previous_states(self):
        return [State_71]

    def enter(self):
        TalkToPlayer(conversation=34000210, unk1=-1, unk2=-1)

    def test(self):
        if IsAttackedBySomeone() == 1 or CheckSelfDeath() == 1:
            return State_16
        if HasTalkEnded() == 1:
            return State_48
        if IsTalkingToSomeoneElse() or CheckSelfDeath() or IsCharacterDisabled() or IsClientPlayer() == 1 or GetRelativeAngleBetweenPlayerAndSelf() > 120 or GetDistanceToPlayer() > 5:
            return State_22
