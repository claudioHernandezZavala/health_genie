import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

# Load the dataset
df = pd.read_csv('diabete_prediction_dataset.csv')

# Drop rows with missing values or impute missing values
df.dropna(inplace=True)

# Keep only glucose level and hypertension as predictors
df = df[['blood_glucose_level', 'hypertension', 'diabetes']]

# Split the dataset into features (X) and the target variable (y)
X = df.drop(columns=['diabetes'])
y = df['diabetes']

# Feature scaling
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2, random_state=42)

# Display the first few rows of the preprocessed features (X) and the target variable (y)
print("Preprocessed features (X):")
print(X.head())
print("\nTarget variable (y):")
print(y.head())
