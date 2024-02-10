import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report

# Load the dataset
df = pd.read_csv('diabete_prediction_dataset.csv')

# Drop rows with missing values or impute missing values
df.dropna(inplace=True)

# Convert categorical variables into numerical format using one-hot encoding
# Assuming 'gender' is a categorical variable
df = pd.get_dummies(df, columns=['gender'])

# Keep only glucose level, hypertension, and gender as predictors
X = df[['blood_glucose_level', 'hypertension', 'gender_Female', 'gender_Male']]
y = df['diabetes']

# Feature scaling
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2, random_state=42)

# Training the model
model = LogisticRegression()
model.fit(X_train, y_train)

# For predictions
predictions = model.predict(X_test)
print(classification_report(y_test, predictions))
