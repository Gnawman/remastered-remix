LuaP		¶	hçõ}A<       @N:\FRPG\data\INTERROOT_x64\script\ai\out\006490_battle.lua        4                  	   
                                          y      ¢   ¢      Æ   Æ   ©   à   à   Ë   ú   ú   å       ÿ   $  $    ;  )  S  @  Z  X  a  `  Õ  Õ  j  Õ            NormalR_min    3          NormalR_max    3          LargeR_min    3          LargeR_max    3          Backstep_Atk_min 	   3          Backstep_Atk_max 
   3          Rolling_Atk_min    3          Rolling_Atk_max    3   
       PushR_min    3   
       PushR_max    3          Guard_NormalR_min    3          Guard_NormalR_max    3                 REGISTER_GOAL (       GOAL_Attendant_of_laughtrecA6490_Battle "       Attendant_of_laughtrecA6490Battle         ffffff@@      @      @      @      @      ð?ffffff@       REGISTER_GOAL_NO_UPDATE +       Attendant_of_laughtrecA6490Battle_Activate "       Attendant_of_laughtrecA6490_Act01 "       Attendant_of_laughtrecA6490_Act02 "       Attendant_of_laughtrecA6490_Act05 "       Attendant_of_laughtrecA6490_Act07 "       Attendant_of_laughtrecA6490_Act17 "       Attendant_of_laughtrecA6490_Act19 "       Attendant_of_laughtrecA6490_Act20 1       Attendant_of_laughtrecA6490_ActAfter_AdjustSpace )       Attendant_of_laughtrecA6490Battle_Update ,       Attendant_of_laughtrecA6490Battle_Terminate +       Attendant_of_laughtrecA6490Battle_Interupt                 ~       !   "   #   #   #   #   #   (   (   (   (   )   )   )   )   *   *   *   *   +   +   +   .   /   1   2   2   2   2   2   2   3   6   6   8   9   :   ;   <   <   =   =   ?   ?   A   B   C   D   D   E   E   G   G   I   J   K   K   L   L   M   M   Q   R   S   S   T   T   U   ^   ^   ^   ^   ^   ^   a   a   a   a   a   a   d   d   d   d   d   d   g   g   g   g   g   g   j   j   j   j   j   j   m   m   m   m   m   m   p   p   p   p   p   p   s   s   s   s   s   s   w   w   w   w   w   w   w   w   y             ai     }          goal     }   
       actPerArr    }          actFuncArr    }          defFuncParamTbl    }          fate    }          fate2    }          BothHandOff    }          targetDist    }          RYOUTE_odds    }          KATATE_odds    }          GuardTaiou    }          atkAfterFunc u   }       !          Common_Clear_Param        GetRandam_Int       ð?      Y@       GetDist        TARGET_ENE_0                IsTargetGuard       @      @       @      D@      @      3@      $@      4@      @      .@      I@      >@      9@      1@       REGIST_FUNC "       Attendant_of_laughtrecA6490_Act01 "       Attendant_of_laughtrecA6490_Act02 "       Attendant_of_laughtrecA6490_Act05 "       Attendant_of_laughtrecA6490_Act07 "       Attendant_of_laughtrecA6490_Act17 "       Attendant_of_laughtrecA6490_Act19 "       Attendant_of_laughtrecA6490_Act20 1       Attendant_of_laughtrecA6490_ActAfter_AdjustSpace        atkAfterOddsTbl        Common_Battle_Activate     ~   
  
  
         Y Ë>   Á   Ë>   Á  	 Ë>   	Á  
 ? E 
  	  
 K@ E  U      Ô É@~É@IÁIAÎ		ÂT   ÉB~ÉBIÁÎ	IÃ ~ Ô C~ICÎ	Î~	IÃ IB~IBÎ	Î~	IÃ      Å  	~        	      E  	        	      Å  	        	      E  	       Å              Y              m                                                                                                                                                                                                                                                                                                                                 ¡   ¡   ¢             ai     l          goal     l   	       paramTbl     l          targetDist    l          fate    l          AppDist    l   	       DashDist    l          Odds_Guard    l             Guard_NormalR_max           GetDist        TARGET_ENE_0        GetRandam_Int       ð?      Y@       NPC_KATATE_Switch        CommonNPC_ChangeWepR1       @       NPC_Approach_Act       >@       AddSubGoal #       GOAL_COMMON_ComboAttackTunableSpin       $@       NPC_ATK_NormalR        DIST_Middle       ø?     V@       GOAL_COMMON_ComboFinal               ð¿      N@       GOAL_COMMON_ComboRepeat        NPC_ATK_LargeR        GetWellSpace_Odds     m   > E  ? Á    E      Y      Y    L@     	  
    Y ×@  Á Å 
 E E   Á  YÁ E 
 E E    Á Y C Ô Á Å 
 E E   Á  YÁ E 
 E E    Á YÁ E 
 E E    Á Y Á Å 
 E E   Á  YÁ E 
 E E    Á YÁ E 
  E   Á  Y Ç Å            ©    A   ª   ª   ª   «   «   «   «   ­   ­   ­   ­   ®   ®   ®   ®   ±   ²   ²   ³   ´   ´   ´   ´   ´   ´   ´   ·   ·   ¸   ¸   ¸   ¸   ¸   ¸   ¸   ¸   ¸   ¹   ¹   ¹   ½   ½   ½   ½   ½   ½   ½   ½   ½   ¾   ¾   ¾   ¾   ¾   ¾   ¾   ¾   ¾   ¿   ¿   Ã   Ã   Å   Å   Æ             ai     @          goal     @   	       paramTbl     @          targetDist    @          fate    @          AppDist    @   	       DashDist    @          Odds_Guard    @             LargeR_max           GetDist        TARGET_ENE_0        GetRandam_Int       ð?      Y@       NPC_KATATE_Switch        CommonNPC_ChangeWepR1       @       NPC_Approach_Act       >@       AddSubGoal #       GOAL_COMMON_ComboAttackTunableSpin       $@       NPC_ATK_LargeR        DIST_Middle       ø?     V@       GetWellSpace_Odds        GOAL_COMMON_ComboFinal               ð¿    A   > E  ? Á    E      Y      Y    L@     	  
    Y ×@ Ô Á Å 
 E E   Á  Y G Ô Á Å 
 E E   Á  YÁ  
 E E   Á  Y G  G E            Ë    1   Í   Í   Í   Î   Î   Î   Î   Ð   Ð   Ð   Ð   Ñ   Ñ   Ñ   Ñ   Ô   Õ   Õ   Ö   ×   ×   ×   ×   ×   ×   ×   Ú   Ú   Ú   Ú   Ú   Ú   Ú   Ú   Ú   Û   Û   Û   Û   Û   Û   Û   Û   Û   Ý   Ý   ß   ß   à             ai     0          goal     0   	       paramTbl     0          targetDist    0          fate    0          AppDist    0   	       DashDist    0          Odds_Guard    0             Backstep_Atk_max           GetDist        TARGET_ENE_0        GetRandam_Int       ð?      Y@       NPC_KATATE_Switch        CommonNPC_ChangeWepR1       @       NPC_Approach_Act        AddSubGoal #       GOAL_COMMON_ComboAttackTunableSpin       $@       NPC_ATK_BackstepB       4@      ø?     V@       GOAL_COMMON_ComboFinal        NPC_ATK_NormalR 
       DIST_None               ð¿       GetWellSpace_Odds     1   > E  ? Á    E      Y      Y    L@     	  
    Y ËÀ  
Á  E  A  Á YËÀ  
Á E E   Á  Y G E            å    1   ç   ç   ç   è   è   è   è   ê   ê   ê   ê   ë   ë   ë   ë   î   ï   ï   ð   ñ   ñ   ñ   ñ   ñ   ñ   ñ   ô   ô   ô   ô   ô   ô   ô   ô   ô   õ   õ   õ   õ   õ   õ   õ   õ   õ   ÷   ÷   ù   ù   ú             ai     0          goal     0   	       paramTbl     0          targetDist    0          fate    0          AppDist    0   	       DashDist    0          Odds_Guard    0             Rolling_Atk_max           GetDist        TARGET_ENE_0        GetRandam_Int       ð?      Y@       NPC_KATATE_Switch        CommonNPC_ChangeWepR1       @       NPC_Approach_Act        AddSubGoal #       GOAL_COMMON_ComboAttackTunableSpin       $@       NPC_ATK_StepF       @      ø?     V@       GOAL_COMMON_ComboFinal        NPC_ATK_NormalR 
       DIST_None               ð¿       GetWellSpace_Odds     1   > E  ? Á    E      Y      Y    L@     	  
    Y ËÀ  
Á  E  A  Á YËÀ  
Á E E   Á  Y G E            ÿ                                            
  
  
  
  
  
  
  
  
                      ai               goal        	       paramTbl               targetDist              fate              AppDist       	       DashDist 
             Odds_Guard          
       PushR_max           GetDist        TARGET_ENE_0        GetRandam_Int       ð?      Y@      @       NPC_Approach_Act        AddSubGoal #       GOAL_COMMON_ComboAttackTunableSpin       $@       NPC_ATK_PushR        DIST_Middle       ø?     V@       GetWellSpace_Odds         > E  ? Á        Ì?     	  
    Y KÀ  
A  E  Å  A Y                 .                                                                                     !  !  #  #  $            ai     -          goal     -   	       paramTbl     -          targetDist    -          fate    -          AppDist    -   	       DashDist    -          Odds_Guard    -             Guard_NormalR_max           GetDist        TARGET_ENE_0        GetRandam_Int       ð?      Y@       CommonNPC_ChangeWepR1       @       NPC_Approach_Act        AddSubGoal        GOAL_COMMON_TurnAround       @       AI_DIR_TYPE_B       $@      @#       GOAL_COMMON_ComboAttackTunableSpin        NPC_ATK_NormalR        DIST_Middle       ø?     V@       GetWellSpace_Odds             .   > E  ? Á    E      Y    @ Å    	  
    Y À E 
 E  Å     A Y À  
 Å E   A  Y Ç Å            )    M   +  +  +  ,  ,  ,  ,  /  /  0  0  0  0  0  0  0  0  0  0  0  0  0  2  2  2  2  2  2  2  2  2  2  2  2  5  5  5  5  5  5  5  5  5  5  5  5  5  5  5  5  5  5  5  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  8  8  :  :  ;            ai     L          goal     L   	       paramTbl     L          targetDist    L          fate    L                 GetDist        TARGET_ENE_0        GetRandam_Int       ð?      Y@      @       AddSubGoal        GOAL_COMMON_ApproachTarget       @       GetRandam_Float        @      @       TARGET_SELF       @       GOAL_COMMON_LeaveTarget       ø?       GOAL_COMMON_SidewayMove               >@      I@       GetWellSpace_Odds     M   > E  ? Á    ×  À Å  E  	Ë@ 
 Á  
  A YÔ À   E  	Ë@ 
Á   
E   A YÀ  Ë@ A 
A  E  	? 
A Á   
Ë@  Á    A Y À  Ë@ A 
A  E  	? 
A Á   
Ë@  Á    A Y A              @    7   B  B  B  B  C  C  C  C  F  F  G  G  H  H  H  H  H  H  H  H  H  H  H  H  H  J  J  J  J  J  J  J  J  J  J  J  J  K  K  K  K  K  K  K  K  K  K  K  K  K  K  K  K  L  S            ai     6          goal     6   	       paramTbl     6          fate    6          fate2    6                 GetRandam_Int       ð?      Y@      T@     Q@       AddSubGoal        GOAL_COMMON_LeaveTarget       @       TARGET_ENE_0        GetRandam_Float       @      @      @      @      ø?       GOAL_COMMON_SidewayMove               >@     F@    7   > A     > A     W¿ Ô
 ?  Ë¿  Á  	Ë@ 
 Á  
   Y Ë¿  A  	Ë@ 
 Á  
   YË¿ Å Á  	> 
 A   
> A      Y Ôÿ           X       Y  Y  Z            ai               goal                      GOAL_RESULT_Continue                     `       a            ai                goal                                  j   ï   l  l  l  m  m  m  m  n  n  n  n  o  o  o  o  r  r  r  r  r  s  t  u  v  v  w  w  x  x  z  z  {  {  {  {  {  {  {  {  {  {  {  {  {  }  }  }  }  }  }  }  }  }  }  }  }  }  }  }  }  }  }  }                                                                                                                                                        ¤  ¤  ¤  ¤  ¤  ¥  ¦  §  §  ¨  ¨  ©  ©  ª  ª  ª  ª  «  «  «  «  «  «  «  «  «  ¬  ¬  ´  ´  ´  ´  ´  µ  µ  ¶  ¶  ·  ·  ·  ·  ·  ¸  ¸  ½  ½  ½  ½  ½  ¾  ¿  ¿  Á  Á  Ã  Ã  Ã  Ã  Ã  Ã  Ã  Ã  Ã  Ã  Ã  Ã  Ã  Ã  Ã  Ã  Ã  Ã  Ã  Ã  Æ  Ç  Ç  È  É  É  É  É  É  É  É  Ë  Ë  Ë  Ë  Ë  Ë  Ë  Ë  Ë  Î  Î  Ñ  Ñ  Ô  Ô  Õ            ai     î          goal     î          targetDist    î          fate    î          fate2    î          fate3    î          FindATKDist    A          FindATKPer    A   	       MoveDist    A          Suc_GuardDist G   Y          Suc_GuardPer H   Y          combRunDist _             combRunPer `             distGuardBreak_Act    ¦          oddsGuardBreak_Act    ¦          shootIntPer ¼   ì          AppDist Õ   è   	       DashDist ×   è          Odds_Guard Ø   è             LargeR_max *          GetDist        TARGET_ENE_0        GetRandam_Int       ð?      Y@       IsInterupt        INTERUPT_FindAttack       @      D@       ClearSubGoal       I@       AddSubGoal        GOAL_COMMON_LeaveTarget       @       combRunDist       @       GOAL_COMMON_SidewayMove        GetRandam_Float               >@       INTERUPT_SuccessGuard       T@#       GOAL_COMMON_ComboAttackTunableSpin       $@       NPC_ATK_LargeR 
       DIST_None       ð¿       INTERUPT_Damaged        INTERUPT_GuardBreak        @      N@       CommonNPC_ChangeWepR1        DIST_Middle       ø?     V@        INTERUPT_ReboundByOpponentGuard 
       Replaning        GOAL_COMMON_Wait ¹?       INTERUPT_Shoot      ÀR@       NPC_Approach_Act     ï   > E  ? Á    ? Á    ? Á    Ë?    Á  Á  Ô	 × T	 ËÀ 	Y 	Á  KÁ 	 ? Á A  E   E   Á Y	 KÁ 	 ËB Á Á  E  ?  Á   ËB Á     Á Y 	 	 	Ë?    Á A   ×  ËÀ Y KÁ  
Á  E  E   Y  Ë? Å  Ô
 Á   Ô	 × T	 ËÀ Y Á  KÁ  
? Á A  E    E   Á Y KÁ  
ËB Á Á  E  ?  Á   ËB Á     Á Y   Ë?    A    ×  ËÀ Y Å    	  
YKÁ  
Á  E   A  Y  Ë? Å   ËÀ Y G Y KÁ E	 	 	E  
Y  Ë? Å	   
  Ô
 Á Ô KÁ  	ËB 
Á Á  
E  ?  Á   ËB Á     Á Y Ô     ÌA 	E
 
         Y 
KÁ 
 Á  E   A  Y
         4      E    Y Á    Á  A  Á  A Á   	Á  
Á  E   Y"  G b     ¢    Ç â     "   G b    ¢   Ç â  " G b  ¢ Ç â      