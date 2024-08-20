import sys
import pickle
import warnings
import sklearn
import os
warnings.filterwarnings('ignore')
file_path = os.path.join(os.path.dirname(__file__) , 'knn_model.pkl')
model, word_vectorizer = pickle.load(open(file_path, 'rb'))

text=sys.argv[1]
# text = "manager manager director senior manager senior analyst financial manager senior  finance ing es finance ing finance finance 04 business finance 04 02 04 general financial  finance finance finance finance finance city state manager city state city state city state city state city state"
word_features = word_vectorizer.transform([text])
predicted_probabilities = model.predict_proba(word_features)

top_3_indices = predicted_probabilities.argsort(axis=1)[:, -3:][:, ::-1]
top_3_categories = model.classes_[top_3_indices]

result = []
for j in range(3):
    result.append({"Category": top_3_categories[0, j]})

print(result)
