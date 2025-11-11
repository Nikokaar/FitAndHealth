import { PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import FitAndHealth from './FitAndHealth';
import { Appbar } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <Appbar.Header elevated>
        <Appbar.Content
          style={{ alignItems: 'center' }}
          title="FitAndHealth App"
        />
      </Appbar.Header>
      <FitAndHealth />
      <StatusBar style="auto" />
    </PaperProvider>
  );
}