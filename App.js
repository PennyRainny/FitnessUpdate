import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { UserProvider } from './UserContext';
import WelcomeScreen from './components/WelcomeScreen';
import GetBurn from './components/GetBurn';
import EatWell from './components/EatWell';
import GoalsScreen from './components/GoalsScreen';
import LoginS from './Login/LoginS';
import SignUpScreen from './Login/SignUpScreen';
import CreateProfile from './Login/CreateProfile';
import ForgotPasswordScreen from './Login/ForgotPasswordScreen';
import GoalSelectionScreen from './components/GoalSelectionScreen';
import HomeScreen from './Dashboard/HomeScreen';
import WorkoutTrackerScreen from './Dashboard/WorkoutTrackerScreen';
import SearchScreen from './Dashboard/SearchScreen';
import FoodScreen from './Dashboard/FoodScreen';
import ProfileScreen from './Dashboard/ProfileScreen';
import EditProfile from './Dashboard/EditProfile';
import ChangetoPassword from './Dashboard/ChangetoPassword';
import Logout from './Dashboard/Logout';
import BurpeesScreen from './Exercisehome/BurpeesScreen';
import JumpSquatsScreen from './Exercisehome/JumpSquatsScreen';
import MountainClimbersScreen from './Exercisehome/MountainClimbersScreen';
import HighKneesScreen from './Exercisehome/HighKneesScreen';
import PlankToShoulderScreen from './Exercisehome/PlankToShoulderScreen';
import BenchJumpScreen from './ExerciseGarden/BenchJumpScreen';
import TricepsDipsScreen from './ExerciseGarden/TricepsDipsScreen';
import StepUpsScreen from './ExerciseGarden/StepUpsScreen';
import JumpingLungesScreen from './ExerciseGarden/JumpingLungesScreen';
import SprintIntervalsScreen from './ExerciseGarden/SprintIntervalsScreen';
import TreadmillIntervalsScreen from './ExerciseFiness/TreadmillIntervalsScreen';
import DeadliftsScreen from './ExerciseFiness/DeadliftsScreen';
import RowingMachineScreen from './ExerciseFiness/RowingMachineScreen';
import KettlebellSwingsScreen from './ExerciseFiness/KettlebellSwingsScreen';
import BattleRoperScreen from './ExerciseFiness/BattleRoperScreen';
import EatingforweightlossScreen from './Eatingforweightloss/EatingforweightlossScreen';
import salmonScreen from './Eatingforweightloss/salmonScreen';
import GrilledChickenBreastSteakScreen from './Eatingforweightloss/GrilledChickenBreastSteakScreen';
import SukiyakisoupScreen from './Eatingforweightloss/SukiyakisoupScreen';
import TunaSaladScreen from './Eatingforweightloss/TunaSaladScreen';
import MincedChickenSoupScreen from './Eatingforweightloss/MincedChickenSoupScreen'; 
import EatingtogainmusclsScreen from './Eatingtogainmuscls/EatingtogainmusclsScreen';
import PorkbasilriceandboiledeggsScreen from './Eatingtogainmuscls/PorkbasilriceandboiledeggsScreen';
import GrilledSalmonOnigiriwithSaltScreen from './Eatingtogainmuscls/GrilledSalmonOnigiriwithSaltScreen';
import TunaSaladSandwichScreen from './Eatingtogainmuscls/TunaSaladSandwichScreen';
import SaladandshreddedchickenbreastScreen from './Eatingtogainmuscls/SaladandshreddedchickenbreastScreen';
import GranolaScreen from './Eatingtogainmuscls/GranolaScreen';
import EatingforcardioScreen from './Eatingforcardio/EatingforcardioScreen';
import BananaandpeanutbutterScreen from './Eatingforcardio/BananaandpeanutbutterScreen';
import OatmealwithalmondmilkScreen from './Eatingforcardio/OatmealwithalmondmilkScreen';
import WholeGrainBreadandEggSandwichScreen from './Eatingforcardio/WholeGrainBreadandEggSandwichScreen';
import StuffedBellPepperswithBrownRiceScreen from './Eatingforcardio/StuffedBellPepperswithBrownRiceScreen';
import CoconutwaterandalmondsScreen from './Eatingforcardio/CoconutwaterandalmondsScreen';
import CountdownScreen from './ตัวนัดเวลา/CountdownScreen';
import NextScreen from './ตัวนัดเวลา/NextScreen';
import CountdownScreen1 from './ตัวนัดเวลา/CountdownScreen1';
import NextScreen1 from './ตัวนัดเวลา/NextScreen1';
import CountdownScreen2 from './ตัวนัดเวลา/CountdownScreen2';
import NextScreen2 from './ตัวนัดเวลา/NextScreen2';
import CountdownScreen3 from './ตัวนัดเวลา/CountdownScreen3';
import NextScreen3 from './ตัวนัดเวลา/NextScreen3';
import CountdownScreen4 from './ตัวนัดเวลา/CountdownScreen4';
import NextScreen4 from './ตัวนัดเวลา/NextScreen4';
import CountdownS from './ตัวนัดเวลา1/CountdownS';
import NextScreenS from './ตัวนัดเวลา1/NextScreenS';
import CountdownS1 from './ตัวนัดเวลา1/CountdownS1';
import NextScreenS1 from './ตัวนัดเวลา1/NextScreenS1';
import CountdownS2 from './ตัวนัดเวลา1/CountdownS2';
import NextScreenS2 from './ตัวนัดเวลา1/NextScreenS2';
import CountdownS3 from './ตัวนัดเวลา1/CountdownS3';
import NextScreenS3 from './ตัวนัดเวลา1/NextScreenS3';
import CountdownS4 from './ตัวนัดเวลา1/CountdownS4';
import NextScreenS4 from './ตัวนัดเวลา1/NextScreenS4';
import Countdown from './ตัวนัดเวลา2/Countdown';
import NextScreenSS from './ตัวนัดเวลา2/NextScreenSS';
import Countdown1 from './ตัวนัดเวลา2/Countdown1';
import NextScreenSS1 from './ตัวนัดเวลา2/NextScreenSS1';
import Countdown2 from './ตัวนัดเวลา2/Countdown2';
import NextScreenSS2 from './ตัวนัดเวลา2/NextScreenSS2';
import Countdown3 from './ตัวนัดเวลา2/Countdown3';
import NextScreenSS3 from './ตัวนัดเวลา2/NextScreenSS3';
import Countdown4 from './ตัวนัดเวลา2/Countdown4';
import NextScreenSS4 from './ตัวนัดเวลา2/NextScreenSS4';


const Stack = createStackNavigator();
export default function App() {
  return (
    <UserProvider>
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{ headerShown: false }}>

      <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
        />   
        <Stack.Screen 
          name="GetBurn" 
          component={GetBurn} 
        />
        <Stack.Screen 
          name="EatWell" 
          component={EatWell} 
        />
        <Stack.Screen
        name='GoalsScreen'
        component={GoalsScreen}
        />
         <Stack.Screen 
          name="Login" 
          component={LoginS} 
        />

        <Stack.Screen 
          name="SignUp" 
          component={SignUpScreen} 
        />

        <Stack.Screen 
          name="CreateProfile" 
          component={CreateProfile} 
        />

        <Stack.Screen 
          name="Forgot" 
          component={ForgotPasswordScreen} 
        />

        <Stack.Screen 
        name="GoalSelectionScreen" 
        component={GoalSelectionScreen} 
        />

        <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        />
        <Stack.Screen 
        name="WorkoutTracker" 
        component={WorkoutTrackerScreen} 
        />

        <Stack.Screen 
        name="BurpeesScreen" 
        component={BurpeesScreen} 
        />

        <Stack.Screen
        name='JumpSquatsScreen'
        component={JumpSquatsScreen}
        />

        <Stack.Screen 
        name="MountainClimbersScreen" 
        component={MountainClimbersScreen} 
        />

        <Stack.Screen 
        name="HighKneesScreen" 
        component={HighKneesScreen} 
        />

        <Stack.Screen 
        name="PlankToShoulderScreen" 
        component={PlankToShoulderScreen} 
        />
        

        <Stack.Screen 
        name="CountdownScreen" 
        component={CountdownScreen} 
        />
        
        <Stack.Screen 
        name="NextScreen" 
        component={NextScreen} 
        />
        
        <Stack.Screen 
        name="CountdownScreen1" 
        component={CountdownScreen1} 
        />
        
        <Stack.Screen 
        name="NextScreen1" 
        component={NextScreen1} 
        />

        <Stack.Screen 
        name="CountdownScreen2" 
        component={CountdownScreen2} 
        />
        
        <Stack.Screen 
        name="NextScreen2" 
        component={NextScreen2} 
        />

        <Stack.Screen 
        name="CountdownScreen3" 
        component={CountdownScreen3} 
        />

        <Stack.Screen 
        name="NextScreen3" 
        component={NextScreen3} 
        />

        <Stack.Screen 
        name="CountdownScreen4" 
        component={CountdownScreen4} 
        />

        <Stack.Screen 
        name="NextScreen4" 
        component={NextScreen4} 
        />

        <Stack.Screen 
        name="BenchJumpScreen" 
        component={BenchJumpScreen} 
        />

        <Stack.Screen 
        name="TricepsDipsScreen" 
        component={TricepsDipsScreen} 
        />

        <Stack.Screen 
        name="StepUpsScreen" 
        component={StepUpsScreen} 
        />
        
        <Stack.Screen 
        name="JumpingLungesScreen" 
        component={JumpingLungesScreen} 
        />
        
        <Stack.Screen 
        name="SprintIntervalsScreen" 
        component={SprintIntervalsScreen} 
        />

        <Stack.Screen 
        name="CountdownS" 
        component={CountdownS} 
        />

        <Stack.Screen 
        name="NextScreenS" 
        component={NextScreenS} 
        />
        
        <Stack.Screen 
        name="CountdownS1" 
        component={CountdownS1} 
        />

        <Stack.Screen 
        name="NextScreenS1" 
        component={NextScreenS1} 
        />

        <Stack.Screen 
        name="CountdownS2" 
        component={CountdownS2} 
        />

        <Stack.Screen 
        name="NextScreenS2" 
        component={NextScreenS2} 
        />

        <Stack.Screen 
        name="CountdownS3" 
        component={CountdownS3} 
        />

        <Stack.Screen 
        name="NextScreenS3" 
        component={NextScreenS3} 
        />

        <Stack.Screen 
        name="CountdownS4" 
        component={CountdownS4} 
        />
        
        <Stack.Screen 
        name="NextScreenS4" 
        component={NextScreenS4} 
        />

        <Stack.Screen 
        name="TreadmillIntervalsScreen" 
        component={TreadmillIntervalsScreen} 
        />

        <Stack.Screen 
        name="DeadliftsScreen" 
        component={DeadliftsScreen} 
        />

        <Stack.Screen 
        name="RowingMachineScreen" 
        component={RowingMachineScreen} 
        />  

        <Stack.Screen 
        name="KettlebellSwingsScreen" 
        component={KettlebellSwingsScreen} 
        />

        <Stack.Screen 
        name="BattleRoperScreen" 
        component={BattleRoperScreen} 
        />

        <Stack.Screen 
        name="Countdown" 
        component={Countdown} 
        />
        
        <Stack.Screen 
        name="NextScreenSS" 
        component={NextScreenSS} 
        />

        <Stack.Screen 
        name="Countdown1" 
        component={Countdown1} 
        />
        
        <Stack.Screen 
        name="NextScreenSS1" 
        component={NextScreenSS1} 
        />

        <Stack.Screen 
        name="Countdown2" 
        component={Countdown2} 
        />    

        <Stack.Screen 
        name="NextScreenSS2" 
        component={NextScreenSS2} 
        />

        <Stack.Screen 
        name="Countdown3" 
        component={Countdown3} 
        />  

        <Stack.Screen 
        name="NextScreenSS3" 
        component={NextScreenSS3} 
        />

        <Stack.Screen 
        name="Countdown4" 
        component={Countdown4} 
        />
        
        <Stack.Screen 
        name="NextScreenSS4" 
        component={NextScreenSS4} 
        />
        

        <Stack.Screen 
        name="Search" 
        component={SearchScreen} 
        />
        <Stack.Screen 
        name="Food" 
        component={FoodScreen} 
        />
        <Stack.Screen 
        name="Profile" 
        component={ProfileScreen} 
        />

        <Stack.Screen 
        name="EditProfile" 
        component={EditProfile} 
        />

        <Stack.Screen 
        name="ChangetoPassword" 
        component={ChangetoPassword} 
        />

        <Stack.Screen 
        name="Logout" 
        component={Logout} 
        />

        <Stack.Screen 
        name="Eatingforweightloss" 
        component={EatingforweightlossScreen} 
        />
        
        <Stack.Screen 
        name="salmonScreen" 
        component={salmonScreen} 
        />
        
        <Stack.Screen 
        name="GrilledChickenBreastSteakScreen" 
        component={GrilledChickenBreastSteakScreen} 
        />

        <Stack.Screen 
        name="SukiyakisoupScreen" 
        component={SukiyakisoupScreen} 
        />

        <Stack.Screen 
        name="TunaSaladScreen" 
        component={TunaSaladScreen} 
        />

        <Stack.Screen 
        name="MincedChickenSoupScreen" 
        component={MincedChickenSoupScreen} 
        />

        <Stack.Screen 
        name="Eatingtogainmuscls" 
        component={EatingtogainmusclsScreen} 
        />

        <Stack.Screen 
        name="PorkbasilriceandboiledeggsScreen" 
        component={PorkbasilriceandboiledeggsScreen} 
        />

        <Stack.Screen 
        name="GrilledSalmonOnigiriwithSaltScreen" 
        component={GrilledSalmonOnigiriwithSaltScreen}
        />

        <Stack.Screen 
        name="TunaSaladSandwichScreen" 
        component={TunaSaladSandwichScreen} 
        />

        <Stack.Screen 
        name="SaladandshreddedchickenbreastScreen" 
        component={SaladandshreddedchickenbreastScreen} 
        />

        <Stack.Screen 
        name="GranolaScreen" 
        component={GranolaScreen} 
        />

        <Stack.Screen 
        name="Eatingforcardio" 
        component={EatingforcardioScreen} 
        />

        <Stack.Screen 
        name="BananaandpeanutbutterScreen" 
        component={BananaandpeanutbutterScreen} 
        />

        <Stack.Screen 
        name="OatmealwithalmondmilkScreen" 
        component={OatmealwithalmondmilkScreen} 
        />

        <Stack.Screen 
        name="WholeGrainBreadandEggSandwichScreen" 
        component={WholeGrainBreadandEggSandwichScreen} 
        />

        <Stack.Screen 
        name="StuffedBellPepperswithBrownRiceScreen" 
        component={StuffedBellPepperswithBrownRiceScreen} 
        />

        <Stack.Screen 
        name="CoconutwaterandalmondsScreen" 
        component={CoconutwaterandalmondsScreen} 
        />


      </Stack.Navigator>
    </NavigationContainer>
    </UserProvider>
  );
}

