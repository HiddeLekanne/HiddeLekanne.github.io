var searchData=
[
  ['acc_5fx_5fsensor_5f',['acc_x_sensor_',['../classrIMUSensor.html#affe86f57e60d7abce828ba902f5afa4a',1,'rIMUSensor']]],
  ['acc_5fy_5fsensor_5f',['acc_y_sensor_',['../classrIMUSensor.html#aad77349a7d33ffa66008d04fb816f130',1,'rIMUSensor']]],
  ['acc_5fz_5fsensor_5f',['acc_z_sensor_',['../classrIMUSensor.html#a216bf8b3e2650b3fb1f094f977ddbfcc',1,'rIMUSensor']]],
  ['acceptconnection',['acceptConnection',['../classTCPServer.html#aea2166af021b485fa5cec5a9d76afb54',1,'TCPServer']]],
  ['accepting_5ffd_5f',['accepting_fd_',['../classTCPServer.html#a86e72338e2fe77a7f92d96d8146832a9',1,'TCPServer']]],
  ['accxsensor',['accXSensor',['../namespaceSensorIds.html#a589fa81fe0b6214a1527d2e4eb223935a911e9e78f97d3affd00d0e5348ace9a5',1,'SensorIds']]],
  ['accysensor',['accYSensor',['../namespaceSensorIds.html#a589fa81fe0b6214a1527d2e4eb223935acbf4db0795aa6be7e23791aa49367df4',1,'SensorIds']]],
  ['acczsensor',['accZSensor',['../namespaceSensorIds.html#a589fa81fe0b6214a1527d2e4eb223935a45c6d10508c97b1942846d68e7220632',1,'SensorIds']]],
  ['action',['Action',['../decision_8h.html#aff5eef49078cbafbd3603bb13f1e9899',1,'decision.h']]],
  ['action_5f',['action_',['../classDecision.html#ab4e34eb655b6fc41ed2e8f954ff43811',1,'Decision']]],
  ['actions',['actions',['../decision__engine_8h.html#a2ca5c1bf44e882988eb7630069bff3f6',1,'decision_engine.h']]],
  ['actionsfinished',['actionsFinished',['../classDNTWindow.html#a7546842d96af287b8bc7fb4517b4fdf2',1,'DNTWindow']]],
  ['active_5f',['active_',['../structrBehaviorStatus_1_1rEvent.html#a24941370e65ece6415c782a09c9ed141',1,'rBehaviorStatus::rEvent']]],
  ['active_5fevents',['active_events',['../classDecisionEngine.html#a8904c260847f490825affd1587dbf901',1,'DecisionEngine']]],
  ['active_5ffd_5f',['active_fd_',['../classTCP.html#a96845d717dd888995db37aec913b387c',1,'TCP']]],
  ['active_5frules',['active_rules',['../classDecisionEngine.html#a32ae968021973cec60e3d40db6d4a6da',1,'DecisionEngine']]],
  ['actuators_5fbutton_5f',['actuators_button_',['../classwOverview.html#ae8b3c79965622fe1da13bf90bd2fb120',1,'wOverview']]],
  ['adddecision',['addDecision',['../classDecisionEngine.html#af1e8ab0d6d8faadb9f2321f85fd67580',1,'DecisionEngine::addDecision()'],['../default_8h.html#abae764bbd55e6cc12213a5b2b15fb952',1,'addDecision(name(&quot;Default rule - do nothing&quot;), description(&quot;&quot;), UtilityScore::SlightlyUseful, events{Event::Always}, considerations{consideration(description(&quot;Constant&quot;),
range(0, 1),
Spline::Linear({{0.f, 0.f},{1.f, 1.f}}),{return 1e-4;})}, actions{output_motion_request_-&gt;motion_=Motion::none;}):&#160;default.h'],['../default_8h.html#a34a555e475a6146786956f96c91de9fe',1,'addDecision(name(&quot;Penalised!&quot;), description(&quot;Robot is penalised&quot;), UtilityScore::MostUseful, events{Event::Penalized}, considerations{consideration(description(&quot;Constant&quot;), range(0, 1), Spline::Linear({{0.f, 0.f},{1.f, 1.f}}),{return 1;})}, actions{output_motion_request_-&gt;motion_=Motion::walk;output_motion_request_-&gt;walkMode=rWalkGenerator::speedMode;output_motion_request_-&gt;resetWalk=true;output_motion_request_-&gt;walkSpeed=Pose2f(0.f, Eigen::Vector2f(0.f, 0.f));}):&#160;default.h'],['../default_8h.html#a03e3cc1889327139747872cf565d9d0e',1,'addDecision(name(&quot;Get up&quot;), description(&quot;get up&quot;), UtilityScore::MostUseful, events{Event::Fallen}, considerations{consideration(description(&quot;Laying down&quot;), range(0, 1), Spline::Linear({{0.f, 0.f},{1.f, 1.f}}),{return falldown_representation_-&gt;state==rFallDownState::State::fallen;})}, actions{output_motion_request_-&gt;walkMode=rWalkGenerator::speedMode;output_motion_request_-&gt;resetWalk=true;output_motion_request_-&gt;walkSpeed=Pose2f(0.f, Eigen::Vector2f(0.f, 0.f));if(falldown_representation_-&gt;direction==rFallDownState::Direction::forward){output_motion_request_-&gt;motion_=Motion::getup_front;}else{output_motion_request_-&gt;motion_=Motion::getup_back;}}):&#160;default.h'],['../finished_8h.html#ae8d9d14aa647f3aa95393215c1257f0a',1,'addDecision(name(&quot;Finished state - stand&quot;), description(&quot;&quot;), UtilityScore::Useful, events{Event::Finished}, considerations{consideration(description(&quot;Constant&quot;), range(0, 1), Spline::Linear({{0.f, 0.f},{1.f, 1.f}}),{return 1;})}, actions{output_motion_request_-&gt;motion_=Motion::stand;}):&#160;finished.h'],['../initial_8h.html#a3171487b921a8f33145cfecad4ac479d',1,'addDecision(name(&quot;Initial stand&quot;), description(&quot;&quot;), UtilityScore::Useful, events{Event::Initial}, considerations{consideration(description(&quot;Stand around while being placed&quot;), range(0, 1), Spline::Linear({{0.f, 0.f},{1.f, 1.f}}),{return 1;})}, actions{output_motion_request_-&gt;motion_=Motion::stand;}):&#160;initial.h'],['../ready_8h.html#a1e95ae7544bb8e35dcc3ef1d670a6e9a',1,'addDecision(name(&quot;Ready walk forward&quot;), description(&quot;walk forward in ready state&quot;), UtilityScore::Useful, events{Event::Ready}, considerations{consideration(description(&quot;Constant&quot;), range(0, 1), Spline::Linear({{0.f, 0.f},{1.f, 1.f}}),{return 1.f;})}, actions{output_motion_request_-&gt;resetWalk=false;output_motion_request_-&gt;motion_=Motion::walk;output_motion_request_-&gt;walkWithSpeed(100.f, 0.f, 0.f);}):&#160;ready.h'],['../set_8h.html#a9f57adf03ffdd1973539ecc3bd8a7e19',1,'addDecision(name(&quot;Set&quot;), description(&quot;&quot;), UtilityScore::Useful, events{Event::Set}, considerations{}, actions{output_motion_request_-&gt;motion_=Motion::stand;if(microphone_representation_-&gt;whistle_detected_){clearActive();raiseEvent(Event::PlayingNone);}if(ready_timestamp_!=0){ready_timestamp_=0;}penalised_timestamp_=-1;}):&#160;set.h'],['../player_8h.html#aeddb5f7c7a20cf54f2a3cd07598670d5',1,'addDecision(name(&quot;Search for ball&quot;), description(&quot;Search for the ball with the whole body&quot;), UtilityScore::Useful, events{Event::PlayingNone, Event::PlayingGoalKick, Event::PlayingFoulKick}, considerations{consideration(description(&quot;Ball not seen recently&quot;), range(2000, 10000), Spline::Monotone({{0.f, 0.f},{0.526f, 0.7166666666666667f},{1.f, 1.f}}),{return SystemTools::getTimeSince(static_cast&lt; unsigned long long &gt;(ball_representation_-&gt;ball_last_seen_));})}, actions{output_motion_request_-&gt;motion_=Motion::walk;output_motion_request_-&gt;resetWalk=false;float angle=ball_representation_-&gt;angle_;if(angle &gt;=0.f) angle=1.f;else angle=-1.f;output_motion_request_-&gt;walkWithSpeed(0.f, 0.f, 0.7f *angle);}):&#160;player.h'],['../player_8h.html#a8a68bf11d25a316cacdb9d48d3c99daf',1,'addDecision(name(&quot;Walk to ball&quot;), description(&quot;Walk towards the ball if we see a ball&quot;), UtilityScore::Useful, events{Event::PlayingNone}, considerations{consideration(description(&quot;Ball is seen recently&quot;), range(0, 3000), Spline::Monotone({{0.f, 1.f},{0.498f, 1.f},{0.972f, 0.f},{1.f, 0.f}}),{return SystemTools::getTimeSince(static_cast&lt; unsigned long long &gt;(ball_representation_-&gt;ball_last_seen_));})}, actions{output_motion_request_-&gt;motion_=Motion::walk;output_motion_request_-&gt;resetWalk=false;float angle=ball_representation_-&gt;angle_;if(std::fabs(angle) &gt;=0.15f){if(angle &gt; 0) angle=1.f;else angle=-1.f;output_motion_request_-&gt;walkWithSpeed(0.f, 0.f, 0.7f *angle);}else{output_motion_request_-&gt;walkWithSpeed(200.f, 0.f, 0.f);}}):&#160;player.h'],['../player_8h.html#af9f2e2142c35877304f8e4a8a77d441c',1,'addDecision(name(&quot;Walk to ball (free kick)&quot;), description(&quot;Walk towards the ball if we see a ball&quot;), UtilityScore::SlightlyUseful, events{Event::PlayingGoalKick, Event::PlayingFoulKick}, considerations{consideration(description(&quot;Ball is seen recently&quot;), range(0, 3000), Spline::Monotone({{0.f, 1.f},{0.498f, 1.f},{0.972f, 0.f},{1.f, 0.f}}),{return SystemTools::getTimeSince(static_cast&lt; unsigned long long &gt;(ball_representation_-&gt;ball_last_seen_));}), consideration(description(&quot;Ball is further than 0.75m&quot;), range(0, 350), Spline::Linear({{0.f, 1.f},{0.752f, 1.f},{0.806f, 0.11f},{1.f, 0.f}}),{if(!ball_representation_-&gt;is_upper_){return 350;}return ball_representation_-&gt;y_;})}, actions{output_motion_request_-&gt;motion_=Motion::walk;output_motion_request_-&gt;resetWalk=false;float angle=ball_representation_-&gt;angle_;if(std::fabs(angle) &gt;=0.15f){if(angle &gt; 0) angle=1.f;else angle=-1.f;output_motion_request_-&gt;walkWithSpeed(0.f, 0.f, 0.7f *angle);}else{output_motion_request_-&gt;walkWithSpeed(200.f, 0.f, 0.f);}}):&#160;player.h'],['../player_8h.html#a7374e09bcb3ce18e2b8bf4a97eff0d96',1,'addDecision(name(&quot;Walk away from ball (free kick)&quot;), description(&quot;&quot;), UtilityScore::SlightlyUseful, events{Event::PlayingGoalKick, Event::PlayingFoulKick}, considerations{consideration(description(&quot;Ball is closer than 0.75m&quot;), range(250, 700), Spline::Linear({{0.f, 0.f},{0.028f, 0.9f},{0.102f, 1.f},{1.f, 1.f}}),{if(!ball_representation_-&gt;is_upper_){return 700;}return ball_representation_-&gt;y_;}), consideration(description(&quot;Ball is seen recently&quot;), range(0, 3000), Spline::Monotone({{0.f, 1.f},{0.498f, 1.f},{0.972f, 0.f},{1.f, 0.f}}),{return SystemTools::getTimeSince(static_cast&lt; unsigned long long &gt;(ball_representation_-&gt;ball_last_seen_));})}, actions{output_motion_request_-&gt;resetWalk=false;output_motion_request_-&gt;motion_=Motion::walk;output_motion_request_-&gt;walkWithSpeed(-200.f, 0.f, 0.f);}):&#160;player.h'],['../player_8h.html#a5d79b94bd2846a276aae0a0ff0013517',1,'addDecision(name(&quot;Turn to ball (free kick)&quot;), description(&quot;&quot;), UtilityScore::MostUseful, events{Event::PlayingGoalKick, Event::PlayingFoulKick}, considerations{consideration(description(&quot;Ball is seen recently&quot;), range(0, 3000), Spline::Monotone({{0.f, 1.f},{0.498f, 1.f},{0.972f, 0.f},{1.f, 0.f}}),{return SystemTools::getTimeSince(static_cast&lt; unsigned long long &gt;(ball_representation_-&gt;ball_last_seen_));}), consideration(description(&quot;Ball at ~0.75m&quot;), range(150, 400), Spline::Monotone({{0.f, 0.f},{0.67f, 1.f},{0.844f, 1.f},{1.f, 0.f}}),{if(!ball_representation_-&gt;is_upper_){return 0;}return ball_representation_-&gt;y_;}), consideration(description(&quot;Ball is not in center&quot;), range(0, 640), Spline::Monotone({{0.f, 1.f},{0.338f, 0.7366666666666667f},{0.504f, 0.f},{0.662f, 0.7466666666666667f},{1.f, 1.f}}),{return ball_representation_-&gt;x_;})}, actions{float angle=ball_representation_-&gt;angle_;output_motion_request_-&gt;motion_=Motion::walk;if(angle &gt; 0) angle=1.f;else angle=-1.f;output_motion_request_-&gt;walkWithSpeed(0.f, 0.f, 0.7f *angle);}):&#160;player.h'],['../player_8h.html#af62e5c06cf2399f69c02df2f1d4e1134',1,'addDecision(name(&quot;Stand still&quot;), description(&quot;Stand still by stop walking&quot;), UtilityScore::SlightlyUseful, events{Event::PlayingNone, Event::PlayingGoalKick, Event::PlayingFoulKick}, considerations{consideration(description(&quot;Constant&quot;), range(0, 1), Spline::Linear({{0.f, 0.f},{1.f, 1.f}}),{return 0.001;})}, actions{output_motion_request_-&gt;resetWalk=true;output_motion_request_-&gt;motion_=Motion::walk;output_motion_request_-&gt;walkWithSpeed(0.f, 0.f, 0.f);}):&#160;player.h'],['../walk__test_8h.html#a44e035c2d2bf21a8df785b0c34921e19',1,'addDecision(name(&quot;Search for ball&quot;), description(&quot;Search for the ball with the whole body&quot;), UtilityScore::Useful, events{Event::PlayingNone}, considerations{consideration(description(&quot;Ball not seen recently&quot;), range(3000, 10000), Spline::Monotone({{0.f, 0.f},{0.526f, 0.7166666666666667f},{1.f, 1.f}}),{return SystemTools::getTimeSince(static_cast&lt; unsigned long long &gt;(ball_representation_-&gt;ball_last_seen_));})}, actions{output_motion_request_-&gt;motion_=Motion::walk;output_motion_request_-&gt;resetWalk=false;float angle=ball_representation_-&gt;angle_;if(angle &gt;=0.f) angle=1.f;else angle=-1.f;output_motion_request_-&gt;walkWithSpeed(0.f, 0.f, 0.7f *angle);}):&#160;walk_test.h'],['../walk__test_8h.html#a7cacb9cc7063accfe3348a7eed5aa1e0',1,'addDecision(name(&quot;Walk to ball&quot;), description(&quot;Walk towards the ball if we see a ball&quot;), UtilityScore::Useful, events{Event::PlayingNone}, considerations{consideration(description(&quot;Ball is seen recently&quot;), range(0, 4000), Spline::Monotone({{0.f, 1.f},{0.498f, 1.f},{0.972f, 0.f},{1.f, 0.f}}),{return SystemTools::getTimeSince(static_cast&lt; unsigned long long &gt;(ball_representation_-&gt;ball_last_seen_));})}, actions{output_motion_request_-&gt;motion_=Motion::walk;output_motion_request_-&gt;resetWalk=false;float angle=ball_representation_-&gt;angle_;if(std::fabs(angle) &gt;=0.2f){if(angle &gt; 0) angle=1.f;else angle=-1.f;output_motion_request_-&gt;walkWithSpeed(0.f, 0.f, 0.7f *angle);}else{output_motion_request_-&gt;walkWithSpeed(300.f, 0.f, 0.f);}}):&#160;walk_test.h'],['../walk__test_8h.html#ab65bab09dbda20e6ad35ec63c3f39933',1,'addDecision(name(&quot;Stand still&quot;), description(&quot;Stand still by stop walking&quot;), UtilityScore::SlightlyUseful, events{Event::PlayingNone}, considerations{consideration(description(&quot;Constant&quot;), range(0, 1), Spline::Linear({{0.f, 0.f},{1.f, 1.f}}),{return 0.001;})}, actions{output_motion_request_-&gt;motion_=Motion::walk;output_motion_request_-&gt;resetWalk=true;output_motion_request_-&gt;walkWithSpeed(0.f, 0.f, 0.f);}):&#160;walk_test.h']]],
  ['addinput',['addInput',['../classOutputMessageBase.html#ae8cff887b49c2fa6372922adea74c7c3',1,'OutputMessageBase::addInput()'],['../classOutputMessage.html#ac3c6d00804abfea229b1aad9856bc399',1,'OutputMessage::addInput()']]],
  ['addmodule',['addModule',['../classModuleGroup.html#aa7a3a7d15f6ec20aa8caea6382098e54',1,'ModuleGroup::addModule()'],['../classModuleManager.html#a98efa46e4ac225471c40bd0440db4052',1,'ModuleManager::addModule()']]],
  ['addr_5flist_5f',['addr_list_',['../classTCPClient.html#ad3e62556946a2785c5ab7f56bf10ff7c',1,'TCPClient']]],
  ['al_5frobot_2ecpp',['al_robot.cpp',['../al__robot_8cpp.html',1,'']]],
  ['al_5frobot_2eh',['al_robot.h',['../al__robot_8h.html',1,'']]],
  ['almost_5fequal',['almost_equal',['../classFloatCompare.html#a512fae2ca96a2d64706948f3d87436a0',1,'FloatCompare']]],
  ['almost_5fzero',['almost_zero',['../classFloatCompare.html#a6bd4edd72707beb531646907f3f11818',1,'FloatCompare']]],
  ['alrobot',['ALRobot',['../classALRobot.html',1,'ALRobot'],['../classALRobot.html#ade0e4f5975f1056500d3cce90df58b19',1,'ALRobot::ALRobot()']]],
  ['always',['Always',['../m__behavior__engine_8h.html#a596773add5f3fbc596c5adc0957a3124a68eec46437c384d8dad18d5464ebc35c',1,'m_behavior_engine.h']]],
  ['angle',['Angle',['../classAngle.html',1,'Angle'],['../classAngle.html#aa3c01f3bf10e064e1a364f55203ac43e',1,'Angle::Angle()=default'],['../classAngle.html#a3cc9b028b373ab64d3a5ba9555d4ac1c',1,'Angle::Angle(float angle)'],['../EigenMatrixBaseExtensions_8h.html#abac1c7ddffcb50e0bf03a971dd6e53a3',1,'angle():&#160;EigenMatrixBaseExtensions.h']]],
  ['angle_2eh',['angle.h',['../angle_8h.html',1,'']]],
  ['angle_5f',['angle_',['../classrBall.html#ad2c83bb8e3e4b70945d880689f0fe32e',1,'rBall']]],
  ['angle_5fx_5fsensor_5f',['angle_x_sensor_',['../classrIMUSensor.html#a430bbdd6ced056018993172e5173623c',1,'rIMUSensor']]],
  ['angle_5fy_5fsensor_5f',['angle_y_sensor_',['../classrIMUSensor.html#ab4edced71bba1e4685e432adf854f1fd',1,'rIMUSensor']]],
  ['angle_5fz_5fsensor_5f',['angle_z_sensor_',['../classrIMUSensor.html#a776412fe89809ed9aef978480173e603',1,'rIMUSensor']]],
  ['angleaxisf',['AngleAxisf',['../math_2Eigen_8h.html#a37fe5cc982ee900f8113aad110534a9b',1,'Eigen.h']]],
  ['angles',['angles',['../classrJointAngles.html#aa0a391e38b1823a8f3d045daa56eb96f',1,'rJointAngles']]],
  ['angles_5f',['angles_',['../classmInterpolationEngine.html#a4da1716991a9d7bc8fc897e6c22cc3cc',1,'mInterpolationEngine']]],
  ['angleto',['angleTo',['../EigenMatrixBaseExtensions_8h.html#a82dcd87f515b3dac33fcd5648b065fcd',1,'EigenMatrixBaseExtensions.h']]],
  ['anglexsensor',['angleXSensor',['../namespaceSensorIds.html#a589fa81fe0b6214a1527d2e4eb223935a3043df6830000b0c571b3b07b82123a0',1,'SensorIds']]],
  ['angleysensor',['angleYSensor',['../namespaceSensorIds.html#a589fa81fe0b6214a1527d2e4eb223935a576936361156b8b6a84865c49bb7249c',1,'SensorIds']]],
  ['anglezsensor',['angleZSensor',['../namespaceSensorIds.html#a589fa81fe0b6214a1527d2e4eb223935a9e34a67d7dca17ee8cf0995c2dd028c3',1,'SensorIds']]],
  ['appendtoconsole',['appendToConsole',['../classDNTWindow.html#abc3479bf4416e43b154795d8ffbeee50',1,'DNTWindow']]],
  ['approx',['Approx',['../namespaceApprox.html',1,'']]],
  ['approx_2eh',['Approx.h',['../Approx_8h.html',1,'']]],
  ['armshoulderpitchfactor',['armShoulderPitchFactor',['../classmWalk2014GeneratorBase.html#a92fb0f5299bfaf1ed6e1d9aca2c07f71',1,'mWalk2014GeneratorBase']]],
  ['armshoulderroll',['armShoulderRoll',['../classmWalk2014GeneratorBase.html#a244c2eb2d9a1f81cee7a25cdf4b4d49c',1,'mWalk2014GeneratorBase']]],
  ['armshoulderrollincreasefactor',['armShoulderRollIncreaseFactor',['../classmWalk2014GeneratorBase.html#a196910c2c90589a40281a24601784750',1,'mWalk2014GeneratorBase']]],
  ['aroundx',['aroundX',['../classRotationMatrix.html#a660725cbcc13dcb019bf064cadd70140',1,'RotationMatrix::aroundX()'],['../namespaceRotation.html#a82420afaedb4150194ed572d8977fd28',1,'Rotation::aroundX()']]],
  ['aroundy',['aroundY',['../classRotationMatrix.html#a2181b4cfeee50d803b43c97fe6dd4a51',1,'RotationMatrix::aroundY()'],['../namespaceRotation.html#ac7876c80cb2cb0e2c29656a86224ae69',1,'Rotation::aroundY()']]],
  ['aroundz',['aroundZ',['../classRotationMatrix.html#a550e8560a65dede4c53018d3e2caff70',1,'RotationMatrix::aroundZ()'],['../namespaceRotation.html#ab616fe543d1a503b95977d370947bfb1',1,'Rotation::aroundZ()']]],
  ['array',['array',['../structConfiguration_1_1detail_1_1TOMLHandler_1_1Structure.html#a31447759d6abc0a0b7fa9a5d95cb78a8af1f713c9e000f5d3f280adbd124df4f5',1,'Configuration::detail::TOMLHandler::Structure::array()'],['../classConfiguration_1_1TOMLValue.html#a7ecb4bdc533ced243f90508e057e8525af1f713c9e000f5d3f280adbd124df4f5',1,'Configuration::TOMLValue::array()']]],
  ['array2a',['Array2a',['../math_2Eigen_8h.html#ad000ae448c07e1a9455489b7bd4d8f67',1,'Eigen.h']]],
  ['array2d',['Array2d',['../math_2Eigen_8h.html#a0ceef76b90ca6373f736b98d30f13b1b',1,'Eigen.h']]],
  ['array2f',['Array2f',['../math_2Eigen_8h.html#a40df3ebd29160acc6e9f76cfa3ef7fb9',1,'Eigen.h']]],
  ['array3f',['Array3f',['../math_2Eigen_8h.html#a9d7f9f04c1622181ced55239d1edffd0',1,'Eigen.h']]],
  ['array_5f',['array_',['../structConfiguration_1_1detail_1_1TOMLHandler_1_1Structure.html#a72c1b18758e507913f68725120e76078',1,'Configuration::detail::TOMLHandler::Structure']]],
  ['array_5ftable',['array_table',['../classConfiguration_1_1detail_1_1TOMLHandler.html#a4ce5ceb58f7349eb81068e2c955f29c6',1,'Configuration::detail::TOMLHandler']]],
  ['as_5farray_5f',['as_array_',['../classConfiguration_1_1TOMLValue.html#a9a744cb8acc3351a2f2af292fd9c213e',1,'Configuration::TOMLValue']]],
  ['as_5fbool_5f',['as_bool_',['../classConfiguration_1_1TOMLValue.html#af40331b3560cdbf8f3be1366ac0c212d',1,'Configuration::TOMLValue']]],
  ['as_5ffloating_5fpoint_5f',['as_floating_point_',['../classConfiguration_1_1TOMLValue.html#ab8da301909a853cbae47ea8d18ceade8',1,'Configuration::TOMLValue']]],
  ['as_5finteger_5f',['as_integer_',['../classConfiguration_1_1TOMLValue.html#a1b1ae678002a73804a8bca98e0ad40e1',1,'Configuration::TOMLValue']]],
  ['as_5fstring_5f',['as_string_',['../classConfiguration_1_1TOMLValue.html#adaf21a24a29958e0ffaa825a4118ae74',1,'Configuration::TOMLValue']]],
  ['as_5ftable_5f',['as_table_',['../classConfiguration_1_1TOMLValue.html#a86c6d13ecce5b517f9af5b88074a389c',1,'Configuration::TOMLValue']]],
  ['assign',['assign',['../classConfiguration_1_1detail_1_1TOMLHandler.html#afe94a3ee5a79282f80d02e51d70f8725',1,'Configuration::detail::TOMLHandler']]],
  ['atan2',['atan2',['../namespaceApprox.html#adf19c02713f3d385d25d53267c52d980',1,'Approx::atan2(float y, float x)'],['../namespaceApprox.html#a58cd972af03ed83aba3b7b7247c962f6',1,'Approx::atan2(const short y, const short x)']]],
  ['atpostprocess',['atPostProcess',['../classALRobot.html#a714712deadb195367c5629fb988a992b',1,'ALRobot']]],
  ['atpreprocess',['atPreProcess',['../classALRobot.html#a9007364553416af6f66beeb863979a38',1,'ALRobot']]],
  ['audio_5fbuffer_5f',['audio_buffer_',['../classrMicrophone.html#a38287751037d5bd198f998bc50abc0f5',1,'rMicrophone']]]
];